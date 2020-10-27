import React, {PureComponent} from 'react'

import SentenceNote from './SentenceNote'

class SentencePastNote extends PureComponent {
  render() {
    return <SentenceNote note={this.props.note} type="past" />
  }
}

export default SentencePastNote
