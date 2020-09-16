import React, {Component} from 'react'

import Sentence from './Sentence'
import ScoreBar from './ScoreBar'

class SingScreen extends Component {
  render() {
    return (
      <>
        <ScoreBar scores={this.props.data.scores}/>
        <noteareas>
          the note areas would go here
        </noteareas>
        <sentences>
          <Sentence text={this.props.data.sentence1}/>
          <Sentence text={this.props.data.sentence2}/>
        </sentences>
      </>
    );
  }
}

export default SingScreen
