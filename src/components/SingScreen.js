import React, {Component} from 'react'

import LiveScoreIndicator from './LiveScoreIndicator'
import Sentence from './Sentence'
import ScoreBar from './ScoreBar'
import NoteArea from './NoteArea'
import Songlist from './Songlist'
import TimeBar from './TimeBar'

class SingScreen extends Component {
  render() {
    return (
      <div className="singscreen" style={{backgroundImage: `url(${this.props.data.background})`}}>
        <LiveScoreIndicator status={this.props.data.livescorestatus} />
        <Songlist songs={this.props.data.songlist} />
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
        <div className="timebar">
          <TimeBar
            currentBeat={this.props.data.currentbeat}
            info={this.props.data.sentenceinfo}
            color={this.props.data.colors[0]}
          />
        </div>
      </div>
    );
  }
}

export default SingScreen
