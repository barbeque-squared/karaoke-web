import React, {Component} from 'react'

class Sentence extends Component {
  render() {
  const text = this.props.text
    return (
      <sentence>{text}</sentence>
    );
  }
}

export default Sentence
