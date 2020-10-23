import React, {PureComponent} from 'react'

import NoteType from '../constants/NoteType'
import ULevel from '../constants/ULevel'

class SvgGoldenNotes extends PureComponent {
  playerLevelToHalfHeight(level) {
    switch(level) {
      case ULevel.NORMAL: return 0.5;
      case ULevel.HARD: return 0.3;
      case ULevel.EASY: return 1;
      default: return 0.5;
    }
  }
  
  render() {
    let notes = this.props.notes.filter(note => note.NoteType === NoteType.GOLDEN)
    if (notes.length === 0) {
      return ( <></> )
    }
    
    let halfHeight = this.playerLevelToHalfHeight(this.props.level)
    return (
      <>
        <pattern id="golden" width={halfHeight} height={halfHeight} patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1={0.5*halfHeight} y1="0" x2="0" y2="0" style={{stroke:'yellow', strokeWidth:1}} />
        </pattern>
        
        {notes.map((note) => (
          <rect
            key={note.Start}
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
