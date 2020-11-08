import React, {PureComponent} from 'react'

import ChatIndicator from './ChatIndicator'
import LiveScoreIndicator from './LiveScoreIndicator'
import LiveScoreStatus from '../constants/LiveScoreStatus'
import ScoreScreen from './ScoreScreen'
import SingScreen from './SingScreen'
import SongBrowser from './SongBrowser'
import Menu from './Menu'

class Karaoke extends PureComponent {
  render() {
    return (
      <div className="karaoke" style={{backgroundImage: `url(${this.props.background})`}}>
        <Menu />
        
        <LiveScoreIndicator status={this.props.livescorestatus} />
        {this.props.livescorestatus === LiveScoreStatus.CONNECTED && (
          <ChatIndicator microphone={this.props.microphone} />
        )}

        {this.props.screen === 'score' && (
          <ScoreScreen {...this.props} />
        )}
        {this.props.screen === 'sing' && (
          <SingScreen {...this.props} />
        )}
        {this.props.screen === 'song' && (
          <SongBrowser songs={this.props.songlist} />
        )}
      </div>
    );
  }
}

export default Karaoke
