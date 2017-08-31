import { connect } from 'react-redux'
import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ExitToApp from 'material-ui-icons/ExitToApp'
import Hidden from 'material-ui/Hidden';

import LeftMenu from './LeftMenu'

import { logOut } from '../actionCreators/user'

const css = {
  title: { flex: 1 }
}

class NavigationBar extends Component {
  constructor () {
    super()
    this.state = { isMenuOpen: false }
  }

  @autobind
  openMenu () {
    this.setState({'isMenuOpen': true})
  }

  render () {
    const { logOut, user } = this.props
    if (user.loginState !== 'success') {
      return <div />
    }

    return (
      <AppBar position='static'>
        <Toolbar>

          <Hidden lgUp>
            <IconButton color="contrast" aria-label="Menu" onClick={this.openMenu}><MenuIcon /></IconButton>
          </Hidden>
          <LeftMenu type={'temporary'} open={this.state.isMenuOpen} onClick={() => this.setState({isMenuOpen: false})} />

          <Typography type='title' color='inherit' style={css.title}>Project manager</Typography>
          <Typography type='caption' color='inherit'>Logout</Typography>
          <IconButton color='contrast' onClick={logOut}><ExitToApp /></IconButton>
        </Toolbar>
      </AppBar>)
  }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { logOut })(NavigationBar)
