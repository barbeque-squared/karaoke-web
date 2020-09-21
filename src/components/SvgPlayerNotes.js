import React, {Component} from 'react'

import ULevel from '../constants/ULevel'
import getColor from '../helpers/getColor'

class SvgPlayerNotes extends Component {
  playerLevelToHalfHeight(level) {
    switch(level) {
      case ULevel.NORMAL: return 0.42;
      case ULevel.HARD: return 0.22;
      case ULevel.EASY: return 0.92;
      default: return 0.42;
    }
  }
  
  render() {
    let baseColor = getColor(this.props.color).rgb()
    let halfHeight = this.playerLevelToHalfHeight(this.props.level)
    return (
      <>
      {this.props.notes.map((note, index) => (
        // TODO: y and height depend on difficulty (0.2 = Medium?)
        <rect
          key={index}
          x={note.Start}
          y={this.props.min + this.props.max - note.Tone - halfHeight}
          ry={halfHeight}
          width={note.Length}
          height={2*halfHeight}
          className={"playernote"}
          fill={baseColor.darken(0.5).string()}
        />
      ))}
      </>
    )
  }
}

export default SvgPlayerNotes
