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

  formatDuration(duration) {
    const d = Temporal.Duration.from(duration)
    return '' + (d.hours > 0 ? d.hours + 'h' : '') + (d.minutes > 0 ? d.minutes + 'm' : '')
  }

  ended(session) {
    const end = Temporal.Instant.from(session.start).add(Temporal.Duration.from(session.duration))
    const now = Temporal.now.instant()
    return Temporal.Instant.compare(end, now) < 1
  }

  render() {
    return (
      <div className={'Schedule'}>
        {this.props.schedule.filter(s => !this.ended(s)).length < 1 && (
          <p>There currently isn't any schedule, but contact <em>{process.env.REACT_APP_CONTACT}</em> on Discord if you want to play sometime.</p>
        )}
        {this.props.schedule.filter(s => !this.ended(s)).length > 0 && (
          <>
            <p>Upcoming karaoke sessions are listed below. Sessions for next week are usually added around Wednesday. To participate, contact <em>{process.env.REACT_APP_CONTACT}</em> on Discord in advance.</p>
            <table>
              <thead><tr>
              <th>When</th>
              <th>Duration</th>
              <th>Slots left</th>
              <th>Note</th>
              </tr></thead>
              <tbody>
              {this.props.schedule.filter(s => !this.ended(s)).map(session => (
                <tr key={session.start}>
                  <td title={'UTC: ' + this.utcFormat(session.start)} className={'help'}>{this.localFormat(session.start)}</td>
                  <td>{this.formatDuration(session.duration)}</td>
                  <td>{session.max - session.players < 1 ? 'None': session.max - session.players}</td>
                  <td>{session.note && (session.note)}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        <p>You will need to have <a href={'https://www.mumble.info/'}>Mumble</a> installed!</p>
        <p>
          This karaoke aims to recreate the living room setting or convention experience: there's voicechat between songs, and everyone sees the same screen.
          And best of all, once connected, you can just put the browser on fullscreen and enjoy singing.
        </p>
        <p><small>It is currently not possible to hear the other players <em>during</em> singing, but it is something I would like to try to add in the future.</small></p>
      </div>
    )
  }
}

Schedule.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    note: PropTypes.string,
    players: PropTypes.number.isRequired,
    start: PropTypes.string.isRequired,
  })).isRequired
}

export default Schedule
