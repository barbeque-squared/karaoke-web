import React, {Component} from 'react'

import SvgNotes from './SvgNotes'
import NoteType from '../constants/NoteType'

class NoteArea extends Component {
  octave(min, max) {
    // ideally, diff between min and max = 12
    if (max - min <= 12) {
      let offset = 0.5 * (12 - (max - min))
      return {min: min - Math.floor(offset), max: max + Math.ceil(offset)}
    }
    // otherwise, just return the lowest octave
    return {min: min, max: min + 12}
  }
  
  svgsize(start, end, min, max) {
    let offset = Math.ceil(0.05*(end - start))
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
  
  noteTypeToClass(notetype) {
    switch (notetype) {
      case NoteType.NORMAL: return "normal"
      case NoteType.GOLDEN: return "golden"
      default: return "normal"
    }
  }
  
  render() {
    if (this.props.notes && this.props.notes.length) {
      let notes = this.props.notes
      // time start-end
      let start = notes[0].Start
      let end = notes[notes.length-1 ].Start + notes[notes.length-1].Length
      
      // tone min-max: use only singable notes to compute this
      let tones = notes.filter(this.isSingable).map(note => note.Tone)
      let min = Math.min(...tones)
      let max = Math.max(...tones)
      
      let svgsize = this.svgsize(start, end, min, max)
      let viewbox = [svgsize.start, svgsize.min, svgsize.end - svgsize.start, svgsize.max - svgsize.min].join(" ")
      //~ console.log(svgsize);
      return (
        <svg viewBox={viewbox} width="100%" height="100%" preserveAspectRatio="none" className="notearea">
          <line x1={svgsize.start} y1={svgsize.min+1} x2={svgsize.end} y2={svgsize.min+1} />
          <line x1={svgsize.start} y1={svgsize.min+3} x2={svgsize.end} y2={svgsize.min+3} />
          <line x1={svgsize.start} y1={svgsize.min+5} x2={svgsize.end} y2={svgsize.min+5} />
          <line x1={svgsize.start} y1={svgsize.min+7} x2={svgsize.end} y2={svgsize.min+7} />
          <line x1={svgsize.start} y1={svgsize.min+9} x2={svgsize.end} y2={svgsize.min+9} />
          <line x1={svgsize.start} y1={svgsize.min+11} x2={svgsize.end} y2={svgsize.min+11} />
          <SvgNotes notes={notes} min={svgsize.min} max={svgsize.max} height={0.5} />
          {this.props.playernotes.map((note, index) => (
            // TODO: y and height depend on difficulty (0.5 = Hard, 1=Medium, 1.5=Easy?)
            <rect
              key={index}
              x={note.Start}
              y={svgsize.min + svgsize.max - note.Tone - 0.3}
              ry="0.3"
              width={note.Length}
              height={0.6}
              className="playernote"
            />
          ))}
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
