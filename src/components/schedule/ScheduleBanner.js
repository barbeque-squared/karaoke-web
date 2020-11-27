import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Temporal } from 'proposal-temporal'
import './ScheduleBanner.css'

class ScheduleBanner extends PureComponent {
  localFormat(str) {
    return Temporal.Instant.from(str).toLocaleString('en-GB', {weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'})
  }

  utcFormat(str) {
    return Temporal.Instant.from(str).toString()
  }

  render() {
    if (this.props.schedule.length) {
      // TODO: filter out ended sessions, but that depends on string parsing
      const nextSession = this.props.schedule[0]
      return (
        <div className={'ScheduleBanner'}>
          <h1>Upcoming session: <span className={'help'} title={'UTC: ' + this.utcFormat(nextSession.start)}>{this.localFormat(nextSession.start)}</span></h1>
          <p>See the menu for the full schedule, and how to participate</p>
        </div>
      )
    }
    return null
  }
}

ScheduleBanner.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.string.isRequired,
  })).isRequired
}

export default ScheduleBanner
