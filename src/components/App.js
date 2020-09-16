import React from 'react';
import '../App.css';

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

function App() {
  return (
    <SingScreen data={data} />
  );
}

export default App;
