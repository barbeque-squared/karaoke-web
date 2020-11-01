import React, {PureComponent} from 'react'

import SongType from '../constants/SongType'

class SongBrowser extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      onlyInstrumental: false
    }
  }

  updateFilter(event) {
    this.setState({filter: event.target.value})
  }

  updateInstrumental(event) {
    this.setState({onlyInstrumental: event.target.checked})
  }

  isInstrumental(song) {
    return song.variants.includes(SongType.INSTRUMENTAL) || song.variants.includes(SongType.LOSSLESS_INSTRUMENTAL)
  }

  render() {
    return (
      <div className="songbrowser">
        <input type="text" value={this.state.filter} onChange={this.updateFilter.bind(this)} placeholder="Filter" />
        <label>
          <input type="checkbox" checked={this.state.onlyInstrumental} onChange={this.updateInstrumental.bind(this)} />
          Only instrumental
        </label>
        <div className="scrolltable">
          <table>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Title</th>
                <th title="Regular">R</th>
                <th title="Instrumental">I</th>
              </tr>
            </thead>
            <tbody>
              {this.props.songs
                .filter(song =>
                  (
                    song.artist.toLowerCase().includes(this.state.filter.toLowerCase()) ||
                    song.title.toLowerCase().includes(this.state.filter.toLowerCase())
                  ) && (this.state.onlyInstrumental ? this.isInstrumental(song) : true)
                )
                .map((song) => (
                <tr key={song.artist+song.title}>
                  <td>{song.artist}</td>
                  <td>{song.title}</td>
                  <td>{song.variants.includes(SongType.LOSSY) || song.variants.includes(SongType.LOSSLESS) ? '●' : ''}</td>
                  <td>{this.isInstrumental(song) ? '●' : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default SongBrowser
