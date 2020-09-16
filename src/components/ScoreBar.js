import React, {Component} from 'react'

import ScoreCard from './ScoreCard'

class ScoreBar extends Component {
  render() {
    return (
      <scorebar>
        {this.props.scores.map((score) => (<ScoreCard score={score}/>))}
      </scorebar>
    );
  }
}

export default ScoreBar
