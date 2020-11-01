import React, {PureComponent} from 'react'

import SongType from '../constants/SongType'

class SongBrowser extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  updateFilter(event) {
    this.setState({filter: event.target.value})
  }

  render() {
    return (
      <div className="songbrowser">
        <input type="text" value={this.state.filter} onChange={this.updateFilter.bind(this)} placeholder="Filter" />
        <form>
        </form>
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
                  song.artist.toLowerCase().includes(this.state.filter.toLowerCase()) ||
                  song.title.toLowerCase().includes(this.state.filter.toLowerCase())
                )
                .map((song) => (
                <tr key={song.artist+song.title}>
                  <td>{song.artist}</td>
                  <td>{song.title}</td>
                  <td>{song.variants.includes(SongType.LOSSY) || song.variants.includes(SongType.LOSSLESS) ? '●' : ''}</td>
                  <td>{song.variants.includes(SongType.INSTRUMENTAL) || song.variants.includes(SongType.LOSSLESS_INSTRUMENTAL) ? '●' : ''}</td>
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
