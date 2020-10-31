import React, {PureComponent} from 'react'

import Sentence from './Sentence'
import SentenceIndicatorContainer from './SentenceIndicatorContainer'

class SentenceWithIndicator extends PureComponent {
  render() {
    return (
      <div className="sentence-with-indicator">
        <SentenceIndicatorContainer
          bpm={this.props.bpm}
          beat={this.props.beat}
          start={this.props.notes.length ? this.props.notes[0].Start : -999999999}
          color={this.props.color}
        />
        <Sentence notes={this.props.notes} beat={this.props.beat}/>
        <></>
      </div>
    )
  }
}

export default SentenceWithIndicator
