import React, {Component} from 'react'

import getColor from '../helpers/getColor'

class SvgPlayerNotes extends Component {
  render() {
    let baseColor = getColor(this.props.color).rgb()
    return (
      <>
      {this.props.notes.map((note, index) => (
        // TODO: y and height depend on difficulty (0.2 = Medium?)
        <rect
          key={index}
          x={note.Start}
          y={this.props.min + this.props.max - note.Tone - this.props.height}
          ry={this.props.height}
          width={note.Length}
          height={2*this.props.height}
          className={"playernote"}
          fill={baseColor.darken(0.5).string()}
        />
      ))}
      </>
    )
  }
}

export default SvgPlayerNotes
