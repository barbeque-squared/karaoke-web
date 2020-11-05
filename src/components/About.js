import React, {PureComponent} from 'react'

class About extends PureComponent {
  render() {
    return (
      <>
        <p>
          This is essentially a highly specialized screensharing application.
          When combined with a voicechat, it enables people to sing karaoke together (and score points for it) without the delay and bandwidth requirements of streaming video.
        </p>
        <p>
          What is shown mostly follows what the host is seeing (singing, result screen), and shows an interactive songlist otherwise.
          The songlist is also shown when the host is offline, so that people can still pick songs for a next time.
        </p>
        <p>Parts of the layout are inspired by Ultrastar Deluxe, but the host can use other programs.</p>
        <p>
          The sourcecode is available at <a href="https://github.com/barbeque-squared/karaoke-web">github.com/barbeque-squared/karaoke-web</a>.
        </p>
      </>
    )
  }
}

export default About
