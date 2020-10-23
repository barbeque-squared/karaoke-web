import React, {PureComponent} from 'react'

import getColor from '../helpers/getColor'

class TimeBarSentences extends PureComponent {
  render() {
    let color = getColor(this.props.color).rgb().string()
    
    return (
      <>
        {this.props.sentences.map((sentence) => (
          <rect
            key={sentence.Start}
            x={sentence.Start}
            y={0}
            width={sentence.End - sentence.Start}
            height={this.props.height}
            className={"sentence"}
            fill={color}
          />
        ))}
      </>
    )
  }
}

export default TimeBarSentences
