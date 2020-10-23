import React, {PureComponent} from 'react'

import LiveScoreStatus from '../constants/LiveScoreStatus'

class LiveScoreIndicator extends PureComponent {
  render() {
    if (this.props.status !== LiveScoreStatus.NOT_CONNECTED) {
      return(null)
    }
    return (
      <div className="livescore" title="Spectator mode: due to rate limits, you will not see the notes as they are sung by players (but you will still see the notes they are supposed to sing, current scores, and everything else). Contact the game host if you are supposed to be singing.">
        <svg viewBox="0 0 22 22">
          <g transform="matrix(.02146 0 0 .02146 1 1)" fill="#ffffff">
            <path d="m466.07 161.53c-205.6 0-382.8 121.2-464.2 296.1-2.5 5.3-2.5 11.5 0 16.9 81.4 174.9 258.6 296.1 464.2 296.1 205.6 0 382.8-121.2 464.2-296.1 2.5-5.3 2.5-11.5 0-16.9-81.4-174.9-258.6-296.1-464.2-296.1m0 514.7c-116.1 0-210.1-94.1-210.1-210.1 0-116.1 94.1-210.1 210.1-210.1 116.1 0 210.1 94.1 210.1 210.1 0 116-94.1 210.1-210.1 210.1"/>
            <circle cx="466.08" cy="466.02" r="134.5"/>
          </g>
        </svg>
      </div>
    );
  }
}

export default LiveScoreIndicator
