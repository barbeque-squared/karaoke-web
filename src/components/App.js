import React, {Component} from 'react';
import '../App.css';
import * as firebase from 'firebase/app';
import 'firebase/database';
import Pusher from 'pusher-js';

import SingScreen from './SingScreen';

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
      background: '',
      colors: [1],
      currentbeat: -9999999,
      levels: [1],
      names: ['Player 1'],
      notes1: [],
      notes2: [],
      scores: [0],
      sentenceinfo: {sentences: [], startbeat: 0, totalbeats: 0},
      playernotes: []
    }
  }

  render() {
    return (
      <SingScreen data={this.state} />
    );
  }

  componentDidMount() {
    this.initFirebase();
    this.initPusher();
  }
  
  initFirebase() {
    try {
      firebase.initializeApp(config);
      let database = firebase.database();
      // setup handlers
      database.ref('karaoke/background').on('value', (d) => {this.setState({background: d.val()})});
      database.ref('karaoke/colors').on('value', (d) => {this.setState({colors: d.val()})});
      database.ref('karaoke/currentbeat').on('value', (d) => {this.setState({currentbeat: d.val()})});
      database.ref('karaoke/levels').on('value', (d) => {this.setState({levels: d.val()})});
      database.ref('karaoke/names').on('value', (d) => {this.setState({names: d.val()})});
      database.ref('karaoke/notes1').on('value', (d) => {this.setState({notes1: d.val()})});
      database.ref('karaoke/notes2').on('value', (d) => {this.setState({notes2: d.val()})});
      database.ref('karaoke/scores').on('value', (d) => {this.setState({scores: d.val()})});
      database.ref('karaoke/sentenceinfo').on('value', (d) => {this.setState({sentenceinfo: d.val()})});
    } catch (e) {
      console.error(e);
    }
  }
  
  initPusher() {
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    })
    const channel = pusher.subscribe('karaoke')
    channel.bind('playernotes', (data) => {
      this.setState({playernotes: data});
    })
  }
}

export default App;
