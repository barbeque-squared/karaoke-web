import React, {PureComponent} from 'react'

import SentenceFutureNote from './SentenceFutureNote'
import SentencePastNote from './SentencePastNote'

// splits the note into a past note and a future note
class SentenceActiveNote extends PureComponent {
  render() {
    const note = this.props.note
    const trimmedText = note.Text.trim()
    const endbeat = note.Start + note.Length
    const fraction = (this.props.beat - note.Start) / (endbeat - note.Start)

    const actualCharsPast = Math.ceil(fraction * trimmedText.length)
    if (actualCharsPast === 0) {
      return (<SentenceFutureNote note={note} />)
    }
    if (actualCharsPast === trimmedText.length) {
      return (<SentencePastNote note={note} />)
    }
    
    const leadingWhitespaces = note.Text.length - note.Text.trimStart().length
    const totalCharsPast = actualCharsPast + leadingWhitespaces
    const pastNote = {...note, Text: note.Text.substring(0, totalCharsPast)}
    const futureNote = {...note, Text: note.Text.substring(totalCharsPast)}
    return (
      <>
        <SentencePastNote note={pastNote} />
        <SentenceFutureNote note={futureNote} />
      </>
    )
  }
}

export default SentenceActiveNote
