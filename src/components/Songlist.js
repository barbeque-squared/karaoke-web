import React, {PureComponent} from 'react'
import Modal from 'react-modal'

import SongType from '../constants/SongType'

Modal.setAppElement('body')

class Songlist extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      songs: props.songs,
      filter: ''
    }
  }

  show() {
    this.setState({show: true})
  }

  hide() {
    this.setState({show: false})
  }
  
  updateFilter(event) {
    this.setState({filter: event.target.value})
  }

  render() {
    return (
      <>
        <button
          className="songlist"
          title="Show the song list"
          onClick={this.show.bind(this)}
        >≡</button>
        <Modal isOpen={this.state.show} onRequestClose={this.hide.bind(this)} contentLabel="Song list">
          <div className="songbrowser">
            <h2>Song browser</h2>
            <input type="text" value={this.state.filter} onChange={this.updateFilter.bind(this)} placeholder="Filter" />
            <button onClick={this.hide.bind(this)}>close</button>
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
                    .map((song, index) => (
                    <tr key={index}>
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
        </Modal>
      </>
    );
  }
}

export default Songlist
