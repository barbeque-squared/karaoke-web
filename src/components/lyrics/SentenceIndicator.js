import React, {PureComponent} from 'react'

import getColor from '../../helpers/getColor'

class SentenceIndicator extends PureComponent {
  constructor(props) {
    super(props)
    this.initialPercentage = this.props.percentage
    this.shouldRender = this.props.percentage < 90
    // scaled to 90% max because the item itself is 10% wide
    this.rangeMultiplier = 90 / (100 - this.props.percentage)
  }
  render() {
    if (!this.shouldRender) {
      return null
    }
    let color = getColor(this.props.color).rgb().string()
    let actualPercentage = this.rangeMultiplier * (this.props.percentage - this.initialPercentage)
    return (
      <div
        className="sentence-indicator"
        style={{backgroundColor: color, marginLeft: (actualPercentage)+'%'}}
      />
    )
  }
}

export default SentenceIndicator
