import React, {PureComponent} from 'react'

import ULevel from '../constants/ULevel'

class LevelIcon extends PureComponent {
  playerLevelToLetter(level) {
    switch(level) {
      case ULevel.MEDIUM: return 'M';
      case ULevel.HARD: return 'H';
      case ULevel.EASY: return 'E';
      default: return '?';
    }
  }

  playerLevelToTitle(level) {
    switch(level) {
      case ULevel.MEDIUM: return 'Medium';
      case ULevel.HARD: return 'Hard';
      case ULevel.EASY: return 'Easy';
      default: return 'Unknown';
    }
  }

  render() {
    let title = this.playerLevelToTitle(this.props.level)
    let className = "levelicon "+title.toLowerCase()
    return (
      <span className={className} title={title}>
        {this.playerLevelToLetter(this.props.level)}
      </span>
    )
  }
}

export default LevelIcon
