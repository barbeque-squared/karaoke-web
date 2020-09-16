import React, {Component} from 'react'

class Sentence extends Component {
  render() {
  const text = this.props.text
    return (
      <div className="sentence">{text}</div>
    );
  }
}

export default Sentence
