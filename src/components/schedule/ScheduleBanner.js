import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Temporal } from '@js-temporal/polyfill'
import './ScheduleBanner.css'

class ScheduleBanner extends PureComponent {
  localFormat(str) {
    return Temporal.Instant.from(str).toLocaleString('en-GB', {weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'})
  }

  utcFormat(str) {
    return Temporal.Instant.from(str).toString()
  }

  ended(session) {
    const end = Temporal.Instant.from(session.start).add(Temporal.Duration.from(session.duration))
    const now = Temporal.Now.instant()
    return Temporal.Instant.compare(end, now) < 1
  }

  render() {
    const sessions = this.props.schedule.filter(s => !this.ended(s))
    if (sessions.length) {
      return (
        <div className={'ScheduleBanner'}>
          <h1>Upcoming session: <span className={'help'} title={'UTC: ' + this.utcFormat(sessions[0].start)}>{this.localFormat(sessions[0].start)}</span></h1>
          <p>See the menu for the full schedule, and how to participate</p>
        </div>
      )
    }
    return null
  }
}

ScheduleBanner.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
  })).isRequired
}

export default ScheduleBanner
