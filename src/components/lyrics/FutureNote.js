import React, {PureComponent} from 'react'

import Note from './Note'

class FutureNote extends PureComponent {
  render() {
    return <Note note={this.props.note} type="future" />
  }
}

export default FutureNote
