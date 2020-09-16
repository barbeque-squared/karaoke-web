import React, {Component} from 'react'

import ScoreCard from './ScoreCard'

class ScoreBar extends Component {
  render() {
    return (
      <div className="scorebar">
        {this.props.players.map((player, index) => (<ScoreCard key={index} name={player.name} score={player.score}/>))}
      </div>
    );
  }
}

export default ScoreBar
