import React, {Component} from 'react'

import getColor from '../helpers/getColor'

class ScoreCard extends Component {
  render() {
    let baseColor = getColor(this.props.color).rgb()
    return (
      <div className="scorecard" style={{backgroundColor: baseColor.fade(0.4).string()}}>
        <div className="name">{this.props.name}</div>
        <div className="score">{this.props.score}</div>
      </div>
    );
  }
}

export default ScoreCard
