import React, {PureComponent} from 'react'

const LOCAL_STORAGE_MLK_KEY = 'mlk'

const NetworkStatus = {
  INITIALIZING: "initializing",
  UNSUBMITTABLE: "unsubmittable",
  SUBMITTABLE: "submittable",
  SUBMITTING: "submitting",
  SUBMIT_FAILED: "submit_failed",
  // mlk responses
  SUBMITTED: "submitted", // 3
  CONNECTION_FAILED: "connection_failed", // 0
  LOGIN_FAILED: "login_failed", // 2
  SCORE_ERROR: "score_error", // 4
  DUPLICATE_SCORE: "duplicate_score", // 5
  SONG_ERROR: "song_error" // 7
}

const VALID_RE = /^\d{10}.+$/

class ScoreSubmitter extends PureComponent {
  abortController = new AbortController()
  
  constructor(props) {
    super(props)
    this.state = {
      network: NetworkStatus.INITIALIZING
    }
  }

  componentDidMount() {
    // check if this song is submittable at all
    fetch(
      // YES, THE PLUS ONE IS CORRECT HERE
      "https://www.mylittlekaraoke.com/highscores/index.php/score/retrieve?level="+(this.props.level+1),
      {method: 'POST', body: this.props.md5, signal: this.abortController.signal}
    ).then((response) => response.text())
    .then((text) => {
      if (text.match(VALID_RE)) {
        this.setState({network: NetworkStatus.SUBMITTABLE})
      } else {
        this.setState({network: NetworkStatus.UNSUBMITTABLE})
      }
    })
    .catch(error => {
      if (error.name === 'AbortError') return;
      this.setState({network: NetworkStatus.UNSUBMITTABLE})
    })
  }

  componentWillUnmount() {
    this.abortController.abort()
  }

  submit() {
    if (localStorage.getItem(LOCAL_STORAGE_MLK_KEY)) {
      let localdata = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MLK_KEY))
      let data = {
        username: localdata.mlkusername,
        password: localdata.mlkpassword,
        score: this.props.noteScores,
        scoreline: this.props.lineScores,
        scoregolden: this.props.goldenScores,
        md5: this.props.md5,
        level: this.props.level
      }

      // actually submit
      fetch(
        "https://www.mylittlekaraoke.com/highscores/index.php/score/retrieve?level="+this.props.level,
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
          signal: this.abortController.signal
        }
      ).then((response) => response.text())
      .then((text) => {
        switch(text) {
          case '0': this.setState({network: NetworkStatus.CONNECTION_FAILED}); break
          case '2': this.setState({network: NetworkStatus.LOGIN_FAILED}); break
          case '3': this.setState({network: NetworkStatus.SUBMITTED}); break
          case '4': this.setState({network: NetworkStatus.SCORE_ERROR}); break
          case '5': this.setState({network: NetworkStatus.DUPLICATE_SCORE}); break
          case '7': this.setState({network: NetworkStatus.SONG_ERROR}); break
          default: this.setState({network: NetworkStatus.SUBMIT_FAILED})
        }
      })
      .catch(error => {
        if (error.name === 'AbortError') return;
        this.setState({network: NetworkStatus.SUBMIT_FAILED})
      })
    }
  }

  render() {
    console.log(this.state.network)
    switch(this.state.network) {
      case NetworkStatus.INITIALIZING: return null
      case NetworkStatus.UNSUBMITTABLE: return <span title="not submittable">u</span>
      case NetworkStatus.SUBMITTABLE: return <button className="score-submit" onClick={this.submit.bind(this)}>submit</button>
      case NetworkStatus.SUBMITTING: return '...'
      case NetworkStatus.SUBMIT_FAILED: return <span title="submit failed">x</span>
      case NetworkStatus.SUBMITTED: return <span title="submitted!">✓</span>
      case NetworkStatus.CONNECTION_FAILED: return <span title="submit failed (connection failed)">x</span>
      case NetworkStatus.LOGIN_FAILED: return <span title="submit failed (login failed)">x</span>
      case NetworkStatus.SCORE_ERROR: return <span title="submit failed (score error)">x</span>
      case NetworkStatus.DUPLICATE_SCORE: return <span title="submit failed (duplicate score -- you probably already had this exact score or higher)">~</span>
      case NetworkStatus.SONG_ERROR: return <span title="submit failed (song error)">x</span>
      default: return null
    }
  }
}

export default ScoreSubmitter
