import React, {PureComponent} from 'react'

import Note from './Note'

class PastNote extends PureComponent {
  render() {
    return <Note note={this.props.note} type="past" />
  }
}

export default PastNote
