import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import EventNoteIcon from 'material-ui-icons/EventNote'
import HomeIcon from 'material-ui-icons/Home'

class LeftMenu extends Component {
  render () {
    return (
      <Drawer open={this.props.open} onRequestClose={this.props.onClose}>
        <List disablePadding>
          <Link to='/'>
            <ListItem button onClick={() => this.setState({open: false})}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
          </Link>
          <Link to='/TaskManager'>
            <ListItem button onClick={() => this.setState({open: false})}>
              <ListItemIcon>
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText primary='Task Manager' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    )
  }
}

export default LeftMenu
