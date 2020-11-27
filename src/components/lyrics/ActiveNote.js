import React, {PureComponent} from 'react'

import FutureNote from './FutureNote'
import PastNote from './PastNote'

// splits the note into a past note and a future note
class ActiveNote extends PureComponent {
  render() {
    const note = this.props.note
    const trimmedText = note.Text.trim()
    const endbeat = note.Start + note.Length
    const fraction = (this.props.beat - note.Start) / (endbeat - note.Start)

    const actualCharsPast = Math.ceil(fraction * trimmedText.length)
    if (actualCharsPast === 0) {
      return (<FutureNote note={note} />)
    }
    if (actualCharsPast === trimmedText.length) {
      return (<PastNote note={note} />)
    }
    
    const leadingWhitespaces = note.Text.length - note.Text.trimStart().length
    const totalCharsPast = actualCharsPast + leadingWhitespaces
    const pastNote = {...note, Text: note.Text.substring(0, totalCharsPast)}
    const futureNote = {...note, Text: note.Text.substring(totalCharsPast)}
    return (
      <>
        <PastNote note={pastNote} />
        <FutureNote note={futureNote} />
      </>
    )
  }
}

export default ActiveNote
