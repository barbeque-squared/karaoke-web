import React, {PureComponent} from 'react'

import ActiveNote from './ActiveNote'
import FutureNote from './FutureNote'
import PastNote from './PastNote'

class Sentence extends PureComponent {
  render() {
    return (
      <div className="sentence">
        {this.props.notes.map(note => {
          if (note.Start > this.props.beat) {
            return <FutureNote key={note.Start} note={note} />
          } else if (note.Start + note.Length < this.props.beat) {
            return <PastNote key={note.Start} note={note} />
          } else {
            return <ActiveNote key={note.Start} note={note} beat={this.props.beat} />
          }
        })}
      </div>
    )
  }
}

export default Sentence
