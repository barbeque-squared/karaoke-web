import React, {Component} from 'react'

import getColor from '../helpers/getColor'

class ScoreCard extends Component {
  render() {
    let baseColor = getColor(this.props.color)
    return (
      <div className="scorecard" style={{backgroundColor: baseColor}}>
        <div className="name">{this.props.name}</div>
        <div className="score">{this.props.score}</div>
      </div>
    );
  }
}

export default ScoreCard
