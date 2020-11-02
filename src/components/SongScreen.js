import React, {PureComponent} from 'react'

import SongBrowser from './SongBrowser'

class SongScreen extends PureComponent {
  render() {
    return (
      <div className="songscreen">
        <SongBrowser songs={this.props.songs} />
      </div>
    )
  }
}

export default SongScreen
