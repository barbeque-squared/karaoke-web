import React, {Component} from 'react';
import '../App.css';
import app from 'firebase/app';
import 'firebase/database';

import SingScreen from './SingScreen';

const data = {
  players: [
    {name: 'Player 1', score: 1000},
    {name: 'Player 2', score: 0},
    {name: 'Player 3', score: 9000},
    {name: 'Player 4', score: 500},
    {name: 'Player 5', score: 20},
    {name: 'Player 6', score: 0}
  ],
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
    this.state = {firebase: {loaded: false}}
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
      app.initializeApp(config);
    } catch (e) {
      console.error(e);
    }
  };
}

export default App;
