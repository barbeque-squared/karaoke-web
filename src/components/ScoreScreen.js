import React, {PureComponent} from 'react'

import getColor from '../helpers/getColor'

class ScoreScreen extends PureComponent {
  render() {
    return (
      <div className="scorescreen">
        <table>
          <thead>
            <tr>
              <th>Player</th>
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
                style={{color: getColor(this.props.colors[index]).rgb().lighten(0.7).string()}}
              >
                <td>{name}</td>
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
