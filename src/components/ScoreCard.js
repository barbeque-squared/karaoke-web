import React, {Component} from 'react'

class ScoreCard extends Component {
  render() {
    return (
      <scorecard>
        <name>PLAYERNAME</name>
        <score>{this.props.score}</score>
      </scorecard>
    );
  }
}

export default ScoreCard
