import React, {PureComponent} from 'react'

import SentenceIndicator from './SentenceIndicator'

class SentenceIndicatorContainer extends PureComponent {
  render() {
    if (this.props.bpm === 0 || this.props.start < this.props.beat) {
      return (<div></div>)
    }
    
    let window = 0.05 * this.props.bpm
    let beatsDone = window - (this.props.start - this.props.beat)
    let percent = Math.max(0, 100 * beatsDone / window)
    return (
      <div className="sentence-indicator-container">
        <SentenceIndicator percentage={percent} color={this.props.color} />
      </div>
    )
  }
}

export default SentenceIndicatorContainer
