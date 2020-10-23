import React, {Component} from 'react'

import SentenceNote from './SentenceNote'

class Sentence extends Component {
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
