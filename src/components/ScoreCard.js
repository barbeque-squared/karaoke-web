import React, {Component} from 'react'

class ScoreCard extends Component {
  render() {
    return (
      <div className="scorecard">
        <div className="name">{this.props.name}</div>
        <div className="score">{this.props.score}</div>
      </div>
    );
  }
}

export default ScoreCard
