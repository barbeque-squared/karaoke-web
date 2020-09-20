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
  
  noteTypeToClass(notetype) {
    switch (notetype) {
      case NoteType.NORMAL: return "normal"
      case NoteType.GOLDEN: return "golden"
      default: return "normal"
    }
  }
  
  /*
          {notes.filter(this.isSingable).map((note, index) => (
            // TODO: y and height depend on difficulty (0.2 = Medium?)
            <rect
              key={index}
              x={note.Start}
              y={svgsize.max - note.Tone - 0.5}
              ry="0.5"
              width={note.Length}
              height={1}
              className={this.noteTypeToClass(note.NoteType)}
            />
          ))}
          * */
  
  render() {
    if (this.props.notes.Notes && this.props.notes.Notes.length) {
      let notes = this.props.notes.Notes
      let tones = notes.map(note => note.Tone)
      // TODO: only use non-freestyle notes for min/max computation
      // time start-end
      let start = notes[0].Start
      let end = notes[notes.length-1 ].Start + notes[notes.length-1].Length
      
      // tone min-max
      let min = Math.min(...tones)
      let max = Math.max(...tones)
      
      let svgsize = this.svgsize(start, end, min, max)
      let viewbox = [svgsize.start, svgsize.min, svgsize.end - svgsize.start, svgsize.max - svgsize.min].join(" ")
      return (
        <svg viewBox={viewbox} width="100%" height="100%" preserveAspectRatio="none" className="notearea">
          <line x1={svgsize.start} y1={svgsize.min+1} x2={svgsize.end} y2={svgsize.min+1} />
          <line x1={svgsize.start} y1={svgsize.min+3} x2={svgsize.end} y2={svgsize.min+3} />
          <line x1={svgsize.start} y1={svgsize.min+5} x2={svgsize.end} y2={svgsize.min+5} />
          <line x1={svgsize.start} y1={svgsize.min+7} x2={svgsize.end} y2={svgsize.min+7} />
          <line x1={svgsize.start} y1={svgsize.min+9} x2={svgsize.end} y2={svgsize.min+9} />
          <line x1={svgsize.start} y1={svgsize.min+11} x2={svgsize.end} y2={svgsize.min+11} />
          <SvgNotes notes={notes} max={svgsize.max} height={0.5} />
          {this.props.playernotes.map((note, index) => (
            // TODO: y and height depend on difficulty (0.2 = Medium?)
            <rect
              key={index}
              x={note.Start}
              y={svgsize.max - note.Tone - 0.5}
              ry="0.5"
              width={note.Length}
              height={1}
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
