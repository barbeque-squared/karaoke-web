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
      names: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6'],
      scores: [1000, 0, 9000, 500, 20, 0],
      notes1: [],
      notes2: [],
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
      //~ database.ref('scores').on('value', (scores) => {this.setState({scores: scores.val()})});
      database.ref('karaoke/notes1').on('value', (notes) => {this.setState({notes1: notes.val()})});
      database.ref('karaoke/notes2').on('value', (notes) => {this.setState({notes2: notes.val()})});
      database.ref('karaoke/sentence1').on('value', (text) => {this.setState({sentence1: text.val()})});
      database.ref('karaoke/sentence2').on('value', (text) => {this.setState({sentence2: text.val()})});
      //~ database.ref('karaoke/playernotes').on('value', (notes) => {this.setState({playernotes: notes.val()})});
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
