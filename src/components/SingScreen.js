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
          {this.props.data.names.map((names, index) => (
            <NoteArea
              key={index}
              notes={this.props.data.notes1}
              playernotes={this.props.data.playernotes ? this.props.data.playernotes[0].Notes : []}
            />
          ))}
        </div>
        <div className="sentences">
          <Sentence notes={this.props.data.notes1}/>
          <Sentence notes={this.props.data.notes2}/>
        </div>
      </>
    );
  }
}

export default SingScreen
