import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Temporal } from 'proposal-temporal'
import './Schedule.css'

class Schedule extends PureComponent {
  localFormat(str) {
    return Temporal.Instant.from(str).toLocaleString('en-GB', {weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric'})
  }

  utcFormat(str) {
    return Temporal.Instant.from(str).toString()
  }

  render() {
    return (
      <div className={'Schedule'}>
        <p>Upcoming karaoke sessions are listed below. Sessions for next week are usually added around Wednesday.</p>
        <table>
          <thead><tr>
            <th>When</th>
            <th>Duration</th>
            <th>Free slots</th>
            <th>Signup</th>
          </tr></thead>
          <tbody>
          {this.props.schedule.map(session => (
            <tr key={session.start}>
              <td title={'UTC: ' + this.utcFormat(session.start)} className={'help'}>{this.localFormat(session.start)}</td>
              <td>{session.duration}</td>
              <td>{session.max - session.players < 1 ? 'Full!': session.max - session.players}</td>
              <td>{session.signup && session.signup.length ? <a href={session.signup}>Form</a> : 'Invite-only'}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <p>All sessions are completely free. Other than Discord and Mumble, you do not need to have anything installed!</p>
        <p>
          This karaoke aims to recreate the living room setting or convention experience: there's voicechat between songs, and everyone sees the same screen.
          And best of all, once Mumble is connected, you can just put the browser on fullscreen and enjoy singing.
        </p>
        <p><small>It is currently not possible to hear the other players during singing, but it is something I would like to try to add in the future.</small></p>
      </div>
    )
  }
}

Schedule.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
  })).isRequired
}

export default Schedule
