import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

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

ScoreBar.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  names: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  scores: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}

export default ScoreBar
