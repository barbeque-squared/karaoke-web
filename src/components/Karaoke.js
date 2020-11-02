import React, {PureComponent} from 'react'

import SingScreen from './SingScreen'
import SongScreen from './SongScreen'
import Menu from './Menu'

class Karaoke extends PureComponent {
  render() {
    return (
      <div className="karaoke" style={{backgroundImage: `url(${this.props.background})`}}>
        <Menu songs={this.props.songlist} />
        {this.props.screen === 'sing' && (
          <SingScreen {...this.props} />
        )}
        {this.props.screen === 'song' && (
          <SongScreen />
        )}
      </div>
    );
  }
}

export default Karaoke
