import React, {PureComponent} from 'react'

import './AudioPlayer.css'

const WebsocketStatus = {
  CONNECTING: 0,
  CONNECTED: 1,
  NOT_CONNECTED: 2,
}

class AudioPlayer extends PureComponent {

  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.rtcConn = new RTCPeerConnection()
    this.socket = null
    this.state = {
      wsStatus: WebsocketStatus.NOT_CONNECTED,
      stream: null,
      playPauseText: '▸',
      playPauseTitle: 'Play'
    }
  }

  componentDidMount() {
    this.rtcConn.addTransceiver('audio', {direction: 'recvonly'});
    this.initSocket(`wss://${process.env.REACT_APP_DOMAIN}/audio`)
  }

  initSocket(url) {
    this.socket = new WebSocket(url)
    this.rtcConn.onicecandidate = (e) => {
      if (e.candidate) {
        this.socket.send(JSON.stringify({
          event: 'candidate',
          data: e.candidate
        }))
      }
    }
    this.rtcConn.ontrack = (e) => {
      if (e.track.kind === 'audio') {
        this.ref.current.srcObject = e.streams[0]
      } else if (e.track.kind === 'video') {
        // do nothing, we don't care
      } else {
        console.log(e)
      }
    }
    this.socket.onerror = (_ => this.setState({wsStatus: WebsocketStatus.NOT_CONNECTED}))
    this.socket.onclose = (_ => this.setState({wsStatus: WebsocketStatus.NOT_CONNECTED}))
    this.socket.onopen = (_ => this.setState({wsStatus: WebsocketStatus.CONNECTED}))
    this.socket.onmessage = (async event => {
      const msg = JSON.parse(event.data)
      if (!msg) {
        console.error(`Cannot parse ${event.data}`)
        return
      }
      switch (msg.event) {
        case 'offer':
          await this.rtcConn.setRemoteDescription(msg.data)
          try {
            const answer = await this.rtcConn.createAnswer()
            this.rtcConn.setLocalDescription(answer)
              .then(() => this.socket.send(JSON.stringify({
                event: 'answer',
                data: answer
              })))
          } catch (e) {
            console.error(e)
          }
          return
        case 'candidate':
          await this.rtcConn.addIceCandidate(msg.data)
          return
        case 'info':
          // do nothing, we do not care about this for now
          return
        default:
          console.log(`Received ${msg.data.event} event: ${JSON.stringify(msg)}`)
      }
      this.setState(JSON.parse(event.data))
    })
  }

  playPause() {
    if (this.ref.current.paused) {
      this.ref.current.play()
    } else {
      this.ref.current.pause()
    }
  }

  // onXXX handlers for the native audio player
  onPlay() {
    this.setState({playPauseText: '◼', playPauseTitle: 'Stop'})
  }
  onPause() {
    this.setState({playPauseText: '▸', playPauseTitle: 'Play'})
  }

  render() {
    return (
      <>
        <audio
          ref={this.ref}
          onPlay={this.onPlay.bind(this)}
          onPause={this.onPause.bind(this)}
        />
        <button
          className={'play-pause'}
          title={this.state.playPauseTitle}
          onClick={this.playPause.bind(this)}
        >{this.state.playPauseText}</button>
      </>
    );
  }
}

export default AudioPlayer
