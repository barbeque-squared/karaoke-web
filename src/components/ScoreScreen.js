import React, {PureComponent} from 'react'

import LevelIcon from './LevelIcon'
import getColor from '../helpers/getColor'

class ScoreScreen extends PureComponent {
  render() {
    return (
      <div className="scorescreen">
        <p>
          <b>{this.props.title}</b><br/>
          by {this.props.artist}
        </p>
        <table>
          <thead>
            <tr>
              <th className="level"><span title="Difficulty">L</span></th>
              <th className="player">Player</th>
              <th>Notes</th>
              <th>Golden</th>
              <th>Line</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.names.map((name, index) => (
              <tr
                key={name}
                style={{color: getColor(this.props.colors[index]).rgb().lighten(0.85).string()}}
              >
                <td className="level"><LevelIcon level={this.props.levels[index]} /></td>
                <td className="player">{name}</td>
                <td>{this.props.noteScores[index]}</td>
                <td>{this.props.goldenScores[index]}</td>
                <td>{this.props.lineScores[index]}</td>
                <td>{this.props.scores[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ScoreScreen
