import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import LevelIcon from './LevelIcon'
import ScoreSubmitter from './ScoreSubmitter'
import getColor from '../helpers/getColor'

const LOCAL_STORAGE_MLK_KEY = 'mlk'

class ScoreScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: 'Player 1'
    }
  }

  componentDidMount() {
    if (localStorage.getItem(LOCAL_STORAGE_MLK_KEY)) {
      this.setState({username: JSON.parse(localStorage.getItem(LOCAL_STORAGE_MLK_KEY)).mlkusername})
    }
  }

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
                <td>
                  {this.props.scores[index]}
                  {this.props.canSubmit && name === this.state.username && this.props.md5 !== '' && (
                    <ScoreSubmitter
                      level={this.props.levels[index]}
                      noteScores={this.props.noteScores[index]}
                      goldenScores={this.props.goldenScores[index]}
                      lineScores={this.props.lineScores[index]}
                      md5={this.props.md5}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

ScoreScreen.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  canSubmit: PropTypes.bool,
  md5: PropTypes.string,
  
  colors: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  names: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  scores: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  noteScores: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  goldenScores: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  lineScores: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
}

export default ScoreScreen
