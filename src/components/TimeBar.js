import React, {Component} from 'react'

import getColor from '../helpers/getColor'

const HEIGHT=1

class TimeBar extends Component {
  render() {
    let color = getColor(this.props.color).rgb().string()
    let startbeat = this.props.info.startbeat
    let totalbeats = this.props.info.totalbeats
    
    let viewbox = [startbeat, 0, totalbeats, HEIGHT].join(" ")
    return (
      <svg viewBox={viewbox} width="100%" height="100%"
        preserveAspectRatio="none" className="timebar"
      >
        {this.props.info.sentences.map((sentence, index) => (
          // TODO: y and height depend on difficulty (0.2 = Medium?)
          <rect
            key={index}
            x={sentence.Start}
            y={0}
            width={sentence.End - sentence.Start}
            height={HEIGHT}
            className={"sentence"}
            fill={color}
          />
        ))}
        <rect x={startbeat} y={0} width={this.props.currentBeat - startbeat} height={HEIGHT} fill={"darkgray"} />
      </svg>
    )
  }
}

export default TimeBar
