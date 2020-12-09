import React, {Component} from 'react';
import '../App.css';
import Karaoke from './Karaoke';
import ULevel from '../constants/ULevel';
import LiveScoreStatus from '../constants/LiveScoreStatus';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: '',
      background: '',
      bpm: 0.0,
      canSubmit: false,
      colors: [1],
      currentbeat: -9999999,
      goldenScores: [0],
      levels: [ULevel.MEDIUM],
      lineScores: [0],
      md5: '',
      names: ['Player 1'],
      notes1: [],
      notes2: [],
      noteScores: [0],
      schedule: [],
      screen: 'song',
      scores: [0],
      sentenceinfo: {sentences: [], startbeat: 0, totalbeats: 0},
      songlist: [],
      playernotes: [],
      livescorestatus: LiveScoreStatus.CONNECTING,
      microphone: true,
      title: ''
    }
  }

  render() {
    return (
      <React.StrictMode>
        <Karaoke {...this.state} />
      </React.StrictMode>
    );
  }

  componentDidMount() {
    fetch(`https://${process.env.REACT_APP_DOMAIN}/data/background.json`)
      .then(response => response.json())
      .then(json => this.setState({background: json.background}))
    fetch(`https://${process.env.REACT_APP_DOMAIN}/data/schedule.json`)
      .then(response => response.json())
      .then(json => this.setState({schedule: json.schedule}))
    fetch(`https://${process.env.REACT_APP_DOMAIN}/data/songlist.json`)
      .then(response => response.json())
      .then(json => this.setState({songlist: json.songlist}))
    fetch(`https://${process.env.REACT_APP_DOMAIN}/data/livecode.txt`)
      .then(response => response.text())
      .then(text => {
      // noinspection JSIncompatibleTypesComparison
        if (text === window.location.hash) {
          this.setState({canSubmit: true})
        }
      })
    this.initSocket(`wss://${process.env.REACT_APP_DOMAIN}/live`)
  }

  initSocket(url) {
    const socket = new WebSocket(url)
    socket.onerror = (_ => this.setState({livescorestatus: LiveScoreStatus.NOT_CONNECTED}))
    socket.onclose = (_ => this.setState({livescorestatus: LiveScoreStatus.NOT_CONNECTED}))
    socket.onopen = (_ => this.setState({livescorestatus: LiveScoreStatus.CONNECTED}))
    socket.onmessage = (event => this.setState(JSON.parse(event.data)))
  }
}

export default App;
