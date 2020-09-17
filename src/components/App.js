import React, {Component} from 'react';
import '../App.css';
import * as firebase from 'firebase/app';
import 'firebase/database';

import SingScreen from './SingScreen';

let data = {
  names: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6'],
  scores: [1000, 0, 9000, 500, 20, 0],
  sentence1: 'example lyrics',
  sentence2: 'next line lyrics'
}

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
    this.state = {data}
  }

  render() {
    return (
      <SingScreen data={data} />
    );
  }

  componentDidMount() {
    //init Firebase
    this.initFirebase();
  }
  
  initFirebase() {
    try {
      console.log(config);
      firebase.initializeApp(config);
      let database = firebase.database();
      // setup handlers
      database.ref('scores').on('value', this.updateScores);
    } catch (e) {
      console.error(e);
    }
  };
  
  updateScores(scores) {
    data.scores=scores.val();
  }
}

export default App;
