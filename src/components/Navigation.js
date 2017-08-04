import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ExitToApp from 'material-ui-icons/ExitToApp'

const css = {
  title: { flex: 1 }
}

class Navigation extends Component {
  render () {
    const { logOut } = this.props
    return (
      <AppBar position='static' color='default'>
        <Toolbar>
          <IconButton><MenuIcon /></IconButton>
          <Typography type='title' color='inherit' style={css.title}>LA BASE</Typography>
          <Typography type='caption' color='inherit'>Logout</Typography>
          <IconButton onClick={logOut}><ExitToApp /></IconButton>
        </Toolbar>
      </AppBar>

    )
  }
}

export default Navigation
