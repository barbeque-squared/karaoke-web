import React, {Component} from 'react'

import Sentence from './Sentence'
import ScoreBar from './ScoreBar'
import NoteArea from './NoteArea'

class SingScreen extends Component {
  render() {
    return (
      <>
        <ScoreBar players={this.props.data.players}/>
        <div className={"noteareas" + (this.props.data.players.length > 3 ? " twocolumn" : "")}>
          {this.props.data.players.map((player, index) => (<NoteArea key={index}/>))}
        </div>
        <div className="sentences">
          <Sentence text={this.props.data.sentence1}/>
          <Sentence text={this.props.data.sentence2}/>
        </div>
      </>
    );
  }
}

export default SingScreen
