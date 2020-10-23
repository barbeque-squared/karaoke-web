import React, {PureComponent} from 'react'

import ScoreCard from './ScoreCard'

class ScoreBar extends PureComponent {
  render() {
    return (
      <div className="scorebar">
        {this.props.names.map((name, index) => (
          <ScoreCard
            key={index}
            name={name}
            score={this.props.scores[index]}
            color={this.props.colors[index]}
          />
        ))}
      </div>
    );
  }
}

export default ScoreBar
