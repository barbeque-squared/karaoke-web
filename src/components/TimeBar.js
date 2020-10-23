import React, {PureComponent} from 'react'

import TimeBarSentences from './TimeBarSentences'

const HEIGHT=1

class TimeBar extends PureComponent {
  render() {
    let startbeat = this.props.info.startbeat
    let totalbeats = this.props.info.totalbeats
    
    let viewbox = [startbeat, 0, totalbeats, HEIGHT].join(" ")
    return (
      <svg viewBox={viewbox} width="100%" height="100%"
        preserveAspectRatio="none" className="timebar"
      >
        <TimeBarSentences
          sentences={this.props.info.sentences}
          color={this.props.color}
          height={HEIGHT}
        />
        <rect x={startbeat} y={0} width={this.props.currentBeat - startbeat} height={HEIGHT} fill={"darkgray"} />
      </svg>
    )
  }
}

export default TimeBar
