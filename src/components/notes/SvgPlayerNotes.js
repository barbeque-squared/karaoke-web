import React, {PureComponent} from 'react'

import ULevel from '../../constants/ULevel'
import getColor from '../../helpers/getColor'

class SvgPlayerNotes extends PureComponent {
  playerLevelToHalfHeight(level) {
    switch(level) {
      case ULevel.MEDIUM: return 0.42;
      case ULevel.HARD: return 0.22;
      case ULevel.EASY: return 0.92;
      default: return 0.42;
    }
  }
  
  render() {
    if (this.props.notes === null) {
      return ( <> </> )
    }
    if (this.props.notes.length === 0) {
      return ( <></> )
    }
    
    let baseColor = getColor(this.props.color).rgb()
    let fill = baseColor.darken(0.5).string()
    let halfHeight = this.playerLevelToHalfHeight(this.props.level)
    
    return (
      <>
      {this.props.notes.map((note) => (
        <rect
          key={note.Start}
          x={note.Start}
          y={this.props.min + this.props.max - note.Tone - halfHeight}
          ry={halfHeight}
          width={note.Length}
          height={2*halfHeight}
          className={"playernote"}
          fill={fill}
        />
      ))}
      </>
    )
  }
}

export default SvgPlayerNotes
