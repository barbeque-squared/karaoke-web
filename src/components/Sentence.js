import React, {PureComponent} from 'react'

import SentenceActiveNote from './SentenceActiveNote'
import SentenceFutureNote from './SentenceFutureNote'
import SentencePastNote from './SentencePastNote'

class Sentence extends PureComponent {
  render() {
    return (
      <div className="sentence">
        {this.props.notes.map(note => {
          if (note.Start > this.props.beat) {
            return <SentenceFutureNote key={note.Start} note={note} />
          } else if (note.Start + note.Length < this.props.beat) {
            return <SentencePastNote key={note.Start} note={note} />
          } else {
            return <SentenceActiveNote key={note.Start} note={note} beat={this.props.beat} />
          }
        })}
      </div>
    )
  }
}

export default Sentence
