import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import EventNoteIcon from 'material-ui-icons/EventNote'
import HomeIcon from 'material-ui-icons/Home'

class LeftMenu extends Component {
  render () {
    const { type, open, onClick } = this.props

    return (
      <Drawer type={type} open={open} onClick={onClick}>
        <List disablePadding style={{width: '249px'}}>
          <Link to='/'>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
          </Link>
          <Link to='/projects'>
            <ListItem button>
              <ListItemIcon>
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText primary='Projects' />
            </ListItem>
          </Link>
          <Link to='/project'>
            <ListItem button>
              <ListItemIcon>
                <EventNoteIcon />
              </ListItemIcon>
              <ListItemText primary='Project' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    )
  }
}

export default LeftMenu
