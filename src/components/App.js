import React from 'react';
import '../App.css';

import SingScreen from './SingScreen';

const data = {
  scores: [1000,0,9000,500,20,0],
  sentence1: 'example lyrics',
  sentence2: 'next line lyrics'
}

function App() {
  return (
    <SingScreen data={data} />
  );
}

export default App;
