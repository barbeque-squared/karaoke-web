import React, {PureComponent} from 'react'

const LOCAL_STORAGE_MLK_KEY = 'mlk'

class Settings extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      mlkusername: '',
      mlkpassword: '',
    }
  }

  componentDidMount() {
    if (localStorage.getItem(LOCAL_STORAGE_MLK_KEY)) {
      let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MLK_KEY))
      this.setState({...data})
    }
  }

  update(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  save() {
    localStorage.setItem(LOCAL_STORAGE_MLK_KEY, JSON.stringify(this.state))
  }

  delete() {
    localStorage.removeItem(LOCAL_STORAGE_MLK_KEY)
    this.setState({
      mlkusername: '',
      mlkpassword: ''
    })
  }

  render() {
    return (
      <div className="settings">
        <div className="mlk">
          <img src="/mlk-96x96.png" alt="My Little Karaoke logo" />
          <div>
            <p>
              If you want to submit highscores to the <a href="https://www.mylittlekaraoke.com/highscores/">My Little Karaoke leaderboard</a>,
              enter your details here.
            </p>
            <label>
              Username: <input type="text" name="mlkusername" onChange={this.update.bind(this)} value={this.state.mlkusername} />
            </label><br/>
            <label>
              Password: <input type="password" name="mlkpassword" onChange={this.update.bind(this)} value={this.state.mlkpassword} />
            </label>
            <button
              className="save"
              onClick={this.save.bind(this)}
            >Save and remember</button>
            <button
              className="delete"
              title="Click this if you no longer want your username/password saved"
              onClick={this.delete.bind(this)}
            >Delete</button>
            <hr />
            <p><i><small>
              Highscores are submitted through a third-party service, the source of which is available at <a href="https://github.com/barbeque-squared/vercel-api2">github.com/barbeque-squared/vercel-api2</a>.
              Only enter your details if you trust that service.
              For technical reasons, they cannot be submitted to the leaderboards directly.
            </small></i></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
