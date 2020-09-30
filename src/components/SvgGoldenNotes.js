import React, {Component} from 'react'

import NoteType from '../constants/NoteType'
import ULevel from '../constants/ULevel'

class SvgGoldenNotes extends Component {
  playerLevelToHalfHeight(level) {
    switch(level) {
      case ULevel.NORMAL: return 0.5;
      case ULevel.HARD: return 0.3;
      case ULevel.EASY: return 1;
      default: return 0.5;
    }
  }
  
  render() {
    let halfHeight = this.playerLevelToHalfHeight(this.props.level)
    return (
      <>
        <pattern id="golden" width={halfHeight} height={halfHeight} patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1={0.5*halfHeight} y1="0" x2="0" y2="0" style={{stroke:'yellow', strokeWidth:1}} />
        </pattern>
        
        {this.props.notes.filter(note => note.NoteType === NoteType.GOLDEN).map((note, index) => (
          <rect
            key={index}
            x={note.Start}
            y={this.props.min + this.props.max - note.Tone - halfHeight}
            ry={halfHeight}
            width={note.Length}
            height={2*halfHeight}
            className="golden"
            fill='url(#golden)'
          />
        ))}
      </>
    )
  }
}

export default SvgGoldenNotes
