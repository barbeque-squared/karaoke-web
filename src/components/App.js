import React, {Component} from 'react';
import '../App.css';
import * as firebase from 'firebase/app';
import 'firebase/database';

import Karaoke from './Karaoke';
import ULevel from '../constants/ULevel';
import LiveScoreStatus from '../constants/LiveScoreStatus';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

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
      screen: 'song',
      scores: [0],
      sentenceinfo: {sentences: [], startbeat: 0, totalbeats: 0},
      songlist: [],
      playernotes: [],
      livescorestatus: LiveScoreStatus.CONNECTED,
      microphone: true,
      title: ''
    }
  }

  render() {
    return (
      <Karaoke {...this.state} />
    );
  }

  componentDidMount() {
    this.initFirebase()
  }
  
  initFirebase() {
    try {
      firebase.initializeApp(config);
      let database = firebase.database();
      // setup handlers
      database.ref('karaoke/background').on('value', d => this.setState({background: d.val()}))
      database.ref('karaoke/songlist').once('value', d => this.setState({songlist: d.val()}))
      database.ref('karaoke/livecode').once('value', d => {
        if (d.val() === window.location.hash) {
          this.setState({canSubmit: true})
        }
      })
      database.ref('karaoke/websocket').once('value', d => this.initSocket(d.val()))
    } catch (e) {
      console.error(e);
    }
  }
  
  initSocket(url) {
    const socket = new WebSocket(url)
    socket.onmessage = (event => this.setState(JSON.parse(event.data)))
  }
}

export default App;
