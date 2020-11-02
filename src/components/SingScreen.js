import React, {PureComponent} from 'react'

import ChatIndicator from './ChatIndicator'
import LiveScoreIndicator from './LiveScoreIndicator'
import LiveScoreStatus from '../constants/LiveScoreStatus'
import Sentence from './Sentence'
import SentenceWithIndicator from './SentenceWithIndicator'
import ScoreBar from './ScoreBar'
import NoteArea from './NoteArea'
import TimeBar from './TimeBar'

class SingScreen extends PureComponent {
  render() {
    return (
      <>
        <LiveScoreIndicator status={this.props.livescorestatus} />
        {this.props.livescorestatus === LiveScoreStatus.CONNECTED && (
          <ChatIndicator microphone={this.props.microphone} />
        )}
        <ScoreBar names={this.props.names} scores={this.props.scores} colors={this.props.colors} />
        <div className={"noteareas" + (this.props.names.length > 3 ? " twocolumn" : "")}>
          {this.props.names.map((names, index) => (
            <NoteArea
              key={index}
              notes={this.props.notes1}
              playernotes={this.props.playernotes && this.props.playernotes[index] ? this.props.playernotes[index] : null}
              color={this.props.colors[index]}
              level={this.props.levels[index]}
            />
          ))}
        </div>
        <div className="sentences">
          <SentenceWithIndicator notes={this.props.notes1} beat={this.props.currentbeat} bpm={this.props.bpm} color={this.props.colors[0]} />
          <Sentence notes={this.props.notes2} beat={-99999999999999}/>
        </div>
        <div className="timebar">
          <TimeBar
            currentBeat={this.props.currentbeat}
            info={this.props.sentenceinfo}
            color={this.props.colors[0]}
          />
        </div>
      </>
    );
  }
}

export default SingScreen
