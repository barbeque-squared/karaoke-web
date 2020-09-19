import React, {Component} from 'react'

class SentenceNote extends Component {
  render() {
    // TODO: render differently depending on style
    return (
      <span>
        {this.props.note.Text}
      </span>
    )
  }
}

export default SentenceNote
