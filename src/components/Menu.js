import React, {PureComponent} from 'react'
import Modal from 'react-modal'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

import About from './About'
import Mumble from './Mumble'
import Settings from './Settings'
import Schedule from './schedule/Schedule'

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
              <Tab>Schedule</Tab>
              <Tab>Mumble</Tab>
              <Tab>Settings</Tab>
              <Tab>About</Tab>
              <button className="close" title="Close" onClick={this.hide.bind(this)}>X</button>
            </TabList>
            <TabPanel><Schedule schedule={this.props.schedule} /></TabPanel>
            <TabPanel><Mumble /></TabPanel>
            <TabPanel><Settings /></TabPanel>
            <TabPanel><About /></TabPanel>
          </Tabs>
        </Modal>
      </>
    )
  }
}

export default Menu
