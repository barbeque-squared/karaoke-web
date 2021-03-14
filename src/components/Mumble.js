import React, {PureComponent} from 'react'

class Mumble extends PureComponent {
  render() {
    return (
      <>
        <p>
          To be able to play, you need to have <a href="https://www.mumble.info/">Mumble</a> installed and configured.
          Below are some tips to help you configure Mumble correctly.
        </p>
        <p>
          Note: if you do not have a (good) microphone, but your smartphone does, it is possible to use your computer for the music and your smartphone for singing.
          Be aware that using a computer results in a better experience, but it is still playable.
        </p>
        <h4>One-time configuration</h4>
        <ol>
          <li>Open Configure - Settings</li>
          <li>Open the Audio Input tab</li>
          <li>In the Transmission section, set Transmit to Voice Activity</li>
          <li>Amplitude should be checked <em>(Signal to Noise does not seem to work)</em></li>
          <li>Set Voice Hold to some small value, around 0.3 seconds</li>
          <li>Set the sliders in such a way that:
            <ul>
              <li>Speech Above should be low enough that the bar reaches the green part when comfortably talking</li>
              <li>Set Silence Below high enough that stuff like keyboard, mouse clicks, and preferably also playing music (at the volume you would for karaoke) is <em>for the most part</em> in the red part.</li>
              <li>Silence Below should be lower than Speech Above</li>
            </ul>
          </li>
          <li>Optionally: change Transmit to Continuous (the settings you just made also affect this)</li>
          <li>In the Compression section, try to get Audio per packet down to around 30ms</li>
          <li>Open the Network tab</li>
          <li>Under Connection, Force TCP mode should be <em>unchecked</em></li>
          <li>Open the Messages tab</li>
          <li><strong>Uncheck everything in the Text-To-Speech and Soundfile columns. Most people will want to uncheck everything under Notification as well.</strong></li>
        </ol>
      </>
    )
  }
}

export default Mumble
