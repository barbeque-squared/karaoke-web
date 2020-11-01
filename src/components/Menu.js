import React, {PureComponent} from 'react'
import Modal from 'react-modal'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import SongBrowser from './SongBrowser'

Modal.setAppElement('body')

class Menu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  show() {
    this.setState({show: true})
  }

  hide() {
    this.setState({show: false})
  }

  render() {
    return (
      <>
        <button
          className="menu"
          title="Show the menu"
          onClick={this.show.bind(this)}
        >≡</button>
        <Modal isOpen={this.state.show} onRequestClose={this.hide.bind(this)} contentLabel="Menu">
          <Tabs>
            <TabList>
              <Tab>Songs</Tab>
              <Tab>Settings</Tab>
              <Tab>About</Tab>
              <button className="close" title="Close" onClick={this.hide.bind(this)}>X</button>
            </TabList>
            <TabPanel><SongBrowser songs={this.props.songs} /></TabPanel>
            <TabPanel>TODO</TabPanel>
            <TabPanel>TODO</TabPanel>
          </Tabs>
        </Modal>
      </>
    )
  }
}

export default Menu
