import React, {PureComponent} from 'react'

import NoteType from '../constants/NoteType'

class SentenceNote extends PureComponent {
  noteTypeToClass(notetype) {
    switch (notetype) {
      case NoteType.NORMAL:
      case NoteType.GOLDEN: return "normal"
      case NoteType.FREESTYLE:
      case NoteType.RAP:
      case NoteType.RAP_GOLDEN: return "freestyle"
      default: return "normal"
    }
  }
  
  render() {
    var className=this.noteTypeToClass(this.props.note.NoteType)
    if (this.props.past) {
      className += " past"
    }
    return (
      <span className={className}>
        {this.props.note.Text}
      </span>
    )
  }
}

export default SentenceNote
