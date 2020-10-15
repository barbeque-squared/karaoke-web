import React, {Component} from 'react'

class ChatIndicator extends Component {
  render() {
    if (this.props.microphone) {
      return(null)
    }
    return (
      <div
        className="chat"
        title="When this icon is visible, you can voice-chat with other players. You will hear other players, and they will hear you. When the icon disappears, it's time to sing!"
      >
        <svg viewBox="0 0 1024 896">
          <path d="M256 512c0-64 0-192 0-192s-160 0-192 0-64 32-64 64 0 288 0 320 32 64 64 64 64 0 64 0v192l194-192s162 0 192 0 62-32 62-64 0-64 0-64-128 0-192 0-128-64-128-128z m576-384c-32 0-416 0-448 0s-64 32-64 64 0 288 0 320 32 64 64 64 190 0 190 0l194 192v-192s32 0 64 0 64-32 64-64 0-288 0-320-32-64-64-64z" />
        </svg>
      </div>
    );
  }
}

export default ChatIndicator
