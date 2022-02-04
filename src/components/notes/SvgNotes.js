import React, {PureComponent} from 'react'

import NoteType from '../../constants/NoteType'
import ULevel from '../../constants/ULevel'
import getColor from '../../helpers/getColor'

class SvgNotes extends PureComponent {
  isSingable(note) {
    return note.NoteType !== NoteType.FREESTYLE
  }
  isNormal(note) {
    return note.NoteType === NoteType.NORMAL || note.NoteType === NoteType.GOLDEN
  }
  
  playerLevelToHalfHeight(level) {
    switch(level) {
      case ULevel.MEDIUM: return 0.5;
      case ULevel.HARD: return 0.3;
      case ULevel.EASY: return 1;
      default: return 0.5;
    }
  }
  
  render() {
    let notes = this.props.notes.filter(this.isSingable)
    if (notes.length === 0) {
      return ( <></> )
    }
    
    let baseColor = getColor(this.props.color).rgb()
    let fill = baseColor.lighten(0.8).string()
    let stroke = baseColor.darken(0.1).string()
    let halfHeight = this.playerLevelToHalfHeight(this.props.level)
    
    return (
      <>
        {notes.map((note) => (
          <rect
            key={note.Start}
            x={note.Start}
            y={this.props.min + this.props.max - note.Tone - halfHeight}
            ry={halfHeight}
            width={note.Length}
            height={2*halfHeight}
            className="note"
            fill={this.isNormal(note) ? fill : '#333'}
            stroke={this.isNormal(note) ? stroke : 'black'}
            strokeWidth={0.2}
          />
        ))}
      </>
    )
  }
}

export default SvgNotes
