import React, {Component} from 'react'

import Sentence from './Sentence'
import ScoreBar from './ScoreBar'
import NoteArea from './NoteArea'

class SingScreen extends Component {
  render() {
    return (
      <>
        <ScoreBar names={this.props.data.names} scores={this.props.data.scores}/>
        <div className={"noteareas" + (this.props.data.names.length > 3 ? " twocolumn" : "")}>
          {this.props.data.names.map((names, index) => (<NoteArea key={index} notes={this.props.data.notes1}/>))}
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
