import React, {Component} from 'react'

import Sentence from './Sentence'
import ScoreBar from './ScoreBar'
import NoteArea from './NoteArea'

class SingScreen extends Component {
  render() {
    return (
      <div className="singscreen" style={{backgroundImage: `url(${this.props.data.background})`}}>
        <ScoreBar names={this.props.data.names} scores={this.props.data.scores} colors={this.props.data.colors} />
        <div className={"noteareas" + (this.props.data.names.length > 3 ? " twocolumn" : "")}>
          {this.props.data.names.map((names, index) => (
            <NoteArea
              key={index}
              notes={this.props.data.notes1}
              playernotes={this.props.data.playernotes && this.props.data.playernotes[index] ? this.props.data.playernotes[index] : []}
              color={this.props.data.colors[index]}
              level={this.props.data.levels[index]}
            />
          ))}
        </div>
        <div className="sentences">
          <Sentence notes={this.props.data.notes1}/>
          <Sentence notes={this.props.data.notes2}/>
        </div>
      </div>
    );
  }
}

export default SingScreen
