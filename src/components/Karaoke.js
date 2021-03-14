import React, {PureComponent} from 'react'

import ChatIndicator from './ChatIndicator'
import LiveScoreIndicator from './LiveScoreIndicator'
import LiveScoreStatus from '../constants/LiveScoreStatus'
import ScoreScreen from './ScoreScreen'
import SingScreen from './SingScreen'
import SongBrowser from './songs/SongBrowser'
import Menu from './Menu'
import ScheduleBanner from './schedule/ScheduleBanner'
import AudioPlayer from './AudioPlayer'

class Karaoke extends PureComponent {
  render() {
    return (
      <div className="karaoke" style={{backgroundImage: `url(${this.props.background})`}}>
        <AudioPlayer />
        <Menu schedule={this.props.schedule} />
        
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
          <ScheduleBanner schedule={this.props.schedule} />
        )}
        <SongBrowser songs={this.props.songlist} visible={this.props.screen === 'song'} />
      </div>
    );
  }
}

export default Karaoke
