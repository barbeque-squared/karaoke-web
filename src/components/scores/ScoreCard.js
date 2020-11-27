import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import getColor from '../../helpers/getColor'

class ScoreCard extends PureComponent {
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

ScoreCard.propTypes = {
  color: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}

export default ScoreCard
