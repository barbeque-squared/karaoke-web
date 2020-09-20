import React, {Component} from 'react'

import NoteType from '../constants/NoteType'
import getColor from '../helpers/getColor'

class SvgNotes extends Component {
  noteTypeToClass(notetype) {
    switch (notetype) {
      case NoteType.NORMAL: return "normal"
      case NoteType.GOLDEN: return "golden"
      default: return "normal"
    }
  }
  
  isSingable(note) {
    return note.NoteType === NoteType.NORMAL || note.NoteType === NoteType.GOLDEN
  }
  
  render() {
    let baseColor = getColor(this.props.color).rgb()
    return (
      <>
        {this.props.notes.filter(this.isSingable).map((note, index) => (
          // TODO: y and height depend on difficulty (0.2 = Medium?)
          <rect
            key={index}
            x={note.Start}
            y={this.props.min + this.props.max - note.Tone - this.props.height}
            ry={this.props.height}
            width={note.Length}
            height={2*this.props.height}
            className={this.noteTypeToClass(note.NoteType)}
            fill={baseColor.lighten(0.8).string()}
            stroke={baseColor.lighten(0.5).string()}
            strokeWidth={0.2}
          />
        ))}
      </>
    )
  }
}

export default SvgNotes
