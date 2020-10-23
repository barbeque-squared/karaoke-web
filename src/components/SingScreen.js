import React, {Component} from 'react'

import ChatIndicator from './ChatIndicator'
import LiveScoreIndicator from './LiveScoreIndicator'
import LiveScoreStatus from '../constants/LiveScoreStatus'
import Sentence from './Sentence'
import ScoreBar from './ScoreBar'
import NoteArea from './NoteArea'
import Songlist from './Songlist'
import TimeBar from './TimeBar'

class SingScreen extends Component {
  /*       background: '',
      colors: [1],
      currentbeat: -9999999,
      levels: [1],
      names: ['Player 1'],
      notes1: [],
      notes2: [],
      scores: [0],
      sentenceinfo: {sentences: [], startbeat: 0, totalbeats: 0},
      songlist: [],
      playernotes: [],
      livescorestatus: LiveScoreStatus.CONNECTING,
      microphone: true,
      */
  
  //~ playerNotesHaveChanged(nextPlayerNotes) {
    //~ if (this.props.playernotes.length !== nextPlayerNotes.length) {
      //~ return true
    //~ }
    //~ this.props.playernotes.forEach((notes, index) => {
      //~ if (notes.length !== nextPlayerNotes[index].length) {
        //~ return true
      //~ }
      //~ if (notes.length && (notes[0].Start !== nextPlayerNotes[0].Start || notes[notes.length-1].Length !== nextPlayerNotes[notes.length-1].Length)) {
        //~ return true
      //~ }
    //~ })
    //~ return false
  //~ }
  
  //~ shouldComponentUpdate(nextProps, nextState) {
    //~ return (
      //~ this.props.background !== nextProps.background ||
      //~ this.props.currentbeat !== nextProps.currentbeat ||
      //~ this.props.livescorestatus !== nextProps.livescorestatus ||
      //~ this.props.microphone !== nextProps.microphone ||
      //~ this.playerNotesHaveChanged(nextProps.playernotes)
    //~ )
  //~ }
  
  render() {
    return (
      <div className="singscreen" style={{backgroundImage: `url(${this.props.background})`}}>
        <LiveScoreIndicator status={this.props.livescorestatus} />
        {this.props.livescorestatus === LiveScoreStatus.CONNECTED && (
          <ChatIndicator microphone={this.props.microphone} />
        )}
        <Songlist songs={this.props.songlist} />
        <ScoreBar names={this.props.names} scores={this.props.scores} colors={this.props.colors} />
        <div className={"noteareas" + (this.props.names.length > 3 ? " twocolumn" : "")}>
          {this.props.names.map((names, index) => (
            <NoteArea
              key={index}
              notes={this.props.notes1}
              playernotes={this.props.playernotes && this.props.playernotes[index] ? this.props.playernotes[index] : []}
              color={this.props.colors[index]}
              level={this.props.levels[index]}
            />
          ))}
        </div>
        <div className="sentences">
          <Sentence notes={this.props.notes1}/>
          <Sentence notes={this.props.notes2}/>
        </div>
        <div className="timebar">
          <TimeBar
            currentBeat={this.props.currentbeat}
            info={this.props.sentenceinfo}
            color={this.props.colors[0]}
          />
        </div>
      </div>
    );
  }
}

export default SingScreen
