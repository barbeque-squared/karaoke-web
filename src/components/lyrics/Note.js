import React, {PureComponent} from 'react'

import NoteType from '../../constants/NoteType'

class Note extends PureComponent {
  noteTypeToClass(notetype) {
    switch (notetype) {
      case NoteType.NORMAL:
      case NoteType.GOLDEN: return "normal"
      case NoteType.FREESTYLE: return "freestyle"
      case NoteType.RAP:
      case NoteType.RAP_GOLDEN: return "rap"
      default: return "normal"
    }
  }
  
  render() {
    var className=this.noteTypeToClass(this.props.note.NoteType) + " " + this.props.type
    return (
      <span className={className}>
        {this.props.note.Text}
      </span>
    )
  }
}

export default Note
