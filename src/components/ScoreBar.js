import React, {Component} from 'react'

import ScoreCard from './ScoreCard'

class ScoreBar extends Component {
  render() {
    return (
      <div className="scorebar">
        {this.props.names.map((name, index) => (<ScoreCard key={index} name={name} score={this.props.scores[index]}/>))}
      </div>
    );
  }
}

export default ScoreBar
