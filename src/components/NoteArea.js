import React, {PureComponent} from 'react'

import SvgNotes from './SvgNotes'
import SvgPlayerNotes from './SvgPlayerNotes'
import SvgGoldenNotes from './SvgGoldenNotes'
import NoteType from '../constants/NoteType'

const HEIGHT = 11

class NoteArea extends PureComponent {
  octave(min, max) {
    if (max - min < HEIGHT) {
      let offset = 0.5 * (HEIGHT - (max - min))
      return {min: min - Math.floor(offset), max: max + Math.ceil(offset)}
    }
    // otherwise, just return the entire min-max plus some margin
    return {min: min - 1, max: max + 1}
  }
  
  svgsize(start, end, min, max) {
    let offset = Math.ceil(0.02*(end - start))
    let octave = this.octave(min, max)
    return {
      start: start - offset,
      end: end + offset,
      min: octave.min,
      max: octave.max
    }
  }
  
  isSingable(note) {
    return note.NoteType === NoteType.NORMAL || note.NoteType === NoteType.GOLDEN
  }
  render() {
    if (this.props.notes && this.props.notes.length) {
      let notes = this.props.notes
      
      // tone min-max: use only singable notes to compute this
      let tones = notes.filter(this.isSingable).map(note => note.Tone)
      if (tones.length === 0) {
        return ( <></> )
      }
      let min = Math.min(...tones)
      let max = Math.max(...tones)
      
      // time start-end
      let start = notes[0].Start
      let end = notes[notes.length-1 ].Start + notes[notes.length-1].Length
      
      let svgsize = this.svgsize(start, end, min, max)
      let viewbox = [svgsize.start, svgsize.min, svgsize.end - svgsize.start, svgsize.max - svgsize.min + 1].join(" ")
      
      return (
        <svg viewBox={viewbox} width="100%" height="100%" preserveAspectRatio="none" className="notearea">
          {[...Array(svgsize.max-svgsize.min).keys()].map(n => (
            <line key={n} x1={svgsize.start} y1={svgsize.min+n+1} x2={svgsize.end} y2 ={svgsize.min+n+1} />
          ))}
          <SvgNotes
            notes={notes}
            min={svgsize.min}
            max={svgsize.max}
            level={this.props.level}
            color={this.props.color}
          />
          
          <SvgPlayerNotes
            notes={this.props.playernotes}
            min={svgsize.min}
            max={svgsize.max}
            level={this.props.level}
            color={this.props.color}
          />
          
          <SvgGoldenNotes
            notes={notes}
            min={svgsize.min}
            max={svgsize.max}
            level={this.props.level}
          />
        </svg>
      )
    }
    
    return (
      <svg width="100%" height="100%" className="notearea">
      </svg>
    );
  }
}

export default NoteArea
