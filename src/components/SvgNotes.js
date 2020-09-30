import React, {Component} from 'react'

import NoteType from '../constants/NoteType'
import ULevel from '../constants/ULevel'
import getColor from '../helpers/getColor'

class SvgNotes extends Component {
  isSingable(note) {
    return note.NoteType === NoteType.NORMAL || note.NoteType === NoteType.GOLDEN
  }
  
  playerLevelToHalfHeight(level) {
    switch(level) {
      case ULevel.NORMAL: return 0.5;
      case ULevel.HARD: return 0.3;
      case ULevel.EASY: return 1;
      default: return 0.5;
    }
  }
  
  render() {
    let baseColor = getColor(this.props.color).rgb()
    let halfHeight = this.playerLevelToHalfHeight(this.props.level)
    return (
      <>
        {this.props.notes.filter(this.isSingable).map((note, index) => (
          <rect
            key={index}
            x={note.Start}
            y={this.props.min + this.props.max - note.Tone - halfHeight}
            ry={halfHeight}
            width={note.Length}
            height={2*halfHeight}
            className="note"
            fill={baseColor.lighten(0.8).string()}
            stroke={baseColor.darken(0.1).string()}
            strokeWidth={0.2}
          />
        ))}
      </>
    )
  }
}

export default SvgNotes
