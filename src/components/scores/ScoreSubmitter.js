import React, {PureComponent} from 'react'

const LOCAL_STORAGE_MLK_KEY = 'mlk'

const NetworkStatus = {
  INITIALIZING: "initializing",
  UNSUBMITTABLE: "unsubmittable",
  SUBMITTABLE: "submittable",
  SUBMITTING: "submitting",
  SUBMIT_FAILED: "submit_failed",
  SUBMITTED: "submitted"
}

class ScoreSubmitter extends PureComponent {
  abortController = new AbortController()
  
  constructor(props) {
    super(props)
    this.state = {
      network: NetworkStatus.INITIALIZING,
      message: ''
    }
  }

  componentDidMount() {
    // check if this song is submittable at all
    fetch(
      'https://vercel-api2.vercel.app/api/check',
      {method: 'POST', body: this.props.md5, signal: this.abortController.signal}
    ).then((response) => response.json())
    .then((json) => {
      if (json.canSubmit) {
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
        song: this.props.md5,
        level: this.props.level
      }

      // actually submit
      this.setState({network: NetworkStatus.SUBMITTING})
      fetch(
        'https://vercel-api2.vercel.app/api/submit',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
          signal: this.abortController.signal
        }
      ).then((response) => response.json())
      .then((json) => {
        if (!json.error) {
          this.setState({network: NetworkStatus.SUBMITTED})
        } else {
          this.setState({network: NetworkStatus.SUBMIT_FAILED, message: json.message})
        }
      })
      .catch(error => {
        if (error.name === 'AbortError') return;
        this.setState({network: NetworkStatus.SUBMIT_FAILED, message: 'unknown error'})
      })
    }
  }

  render() {
    switch(this.state.network) {
      case NetworkStatus.INITIALIZING: return null
      case NetworkStatus.UNSUBMITTABLE: return <span title="not submittable">u</span>
      case NetworkStatus.SUBMITTABLE: return <button className="score-submit" onClick={this.submit.bind(this)}>submit</button>
      case NetworkStatus.SUBMITTING: return '...'
      case NetworkStatus.SUBMITTED: return <span title="submitted!">✓</span>
      default: return <span title={'submit failed ('+this.state.message+')'}>x</span>
    }
  }
}

export default ScoreSubmitter
