import React, {PureComponent} from 'react'

import LiveScoreStatus from '../constants/LiveScoreStatus'

class LiveScoreIndicator extends PureComponent {
  render() {
    switch (this.props.status) {
      case LiveScoreStatus.CONNECTING: return <div className='livescore' title='Connecting'>...</div>
      case LiveScoreStatus.NOT_CONNECTED: return <div className='livescore' title='Disconnected'>--</div>
      default: return null
    }
  }
}

export default LiveScoreIndicator
