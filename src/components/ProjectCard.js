import React, { Component } from 'react'

import { ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import FolderIcon from 'material-ui-icons/Folder'
import GroupIcon from 'material-ui-icons/Group'
import ChatIcon from 'material-ui-icons/Chat'
import TodayIcon from 'material-ui-icons/Today'

import Tooltip from './Tooltip'

const style = {
  cover: {
    width: '64px',
    height: '64px',
    borderRadius: '32px'
  },
  icon: {
    width: '32px',
    height: '32px'
  }
}

class ProjectCard extends Component {
  render () {
    const { project } = this.props
    return (
      <ListItem button>
        <ListItemAvatar>
          <Avatar style={style.cover} src='https://fakeimg.pl/64' />
        </ListItemAvatar>
        <ListItemText primary={project.name} secondary={project.author} />
        <ListItemSecondaryAction>
          <IconButton><Tooltip><GroupIcon style={style.icon} /></Tooltip></IconButton>
          <IconButton><Tooltip><FolderIcon style={style.icon} /></Tooltip></IconButton>
          <IconButton><Tooltip><ChatIcon style={style.icon} /></Tooltip></IconButton>
          <IconButton><Tooltip><TodayIcon style={style.icon} /></Tooltip></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default ProjectCard
