import React, {Component} from 'react'

import SentenceNote from './SentenceNote'

class Sentence extends Component {
  render() {
    if (this.props.notes.Notes) {
      let notes = this.props.notes.Notes
      return (
        <div className="sentence">
          {notes.map((note, index) => (<SentenceNote key={index} note={note} />))}
        </div>
      )
    }
    
    return (
      <div className="sentence"></div>
    );
  }
}

export default Sentence
