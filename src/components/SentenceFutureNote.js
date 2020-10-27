import React, {PureComponent} from 'react'

import SentenceNote from './SentenceNote'

class SentenceFutureNote extends PureComponent {
  render() {
    return <SentenceNote note={this.props.note} type="future" />
  }
}

export default SentenceFutureNote
