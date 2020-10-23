import React, {PureComponent} from 'react'

import SentenceNote from './SentenceNote'

class Sentence extends PureComponent {
  render() {
    if (this.props.notes) {
      return (
        <div className="sentence">
          {this.props.notes.map((note) => (<SentenceNote key={note.Start} note={note} />))}
        </div>
      )
    }
    
    return (
      <div className="sentence"></div>
    );
  }
}

export default Sentence
