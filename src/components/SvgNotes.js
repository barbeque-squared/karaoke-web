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
        <pattern id="golden" width={this.props.height} height={this.props.height} patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1={0.5*this.props.height} y1="0" x2="0" y2="0" style={{stroke:'yellow', strokeWidth:1}} />
        </pattern>
        
        {this.props.notes.filter(this.isSingable).map((note, index) => (
          // TODO: y and height depend on difficulty (0.2 = Medium?)
          // TODO: overlay a golden rect instead of trying to pattern it?
          <rect
            key={index}
            x={note.Start}
            y={this.props.min + this.props.max - note.Tone - this.props.height}
            ry={this.props.height}
            width={note.Length}
            height={2*this.props.height}
            className={this.noteTypeToClass(note.NoteType)}
            fill={note.NoteType === NoteType.GOLDEN ? 'url(#golden)' : baseColor.lighten(0.8).string()}
            stroke={baseColor.lighten(0.5).string()}
            strokeWidth={0.2}
          />
        ))}
      </>
    )
  }
}

export default SvgNotes
