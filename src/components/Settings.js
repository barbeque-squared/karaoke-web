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
              If you want to submit scores to the <a href="https://www.mylittlekaraoke.com/highscores/">My Little Karaoke leaderboard</a>,
              enter your details here (<i>case sensitive</i>).
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
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
