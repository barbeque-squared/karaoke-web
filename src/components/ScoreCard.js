import React, {Component} from 'react'

import getColor from '../helpers/getColor'

class ScoreCard extends Component {
  render() {
    let baseColor = getColor(this.props.color).rgb()
    let bgColor = baseColor.fade(0.5).string()
    let textColor = baseColor.isDark() ? 'white' : 'black'
    return (
      <div className="scorecard" style={{backgroundColor: bgColor, color: textColor}}>
        <div className="name">{this.props.name}</div>
        <div className="score">{this.props.score}</div>
      </div>
    );
  }
}

export default ScoreCard
