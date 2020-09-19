import React, {Component} from 'react'

import NoteType from '../constants/NoteType'

class SentenceNote extends Component {
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
    // TODO: render differently depending on style
    return (
      <span className={this.noteTypeToClass(this.props.note.NoteType)}>
        {this.props.note.Text}
      </span>
    )
  }
}

export default SentenceNote
