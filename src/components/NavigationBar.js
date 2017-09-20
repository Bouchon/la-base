import { connect } from 'react-redux'
import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ExitToApp from 'material-ui-icons/ExitToApp'
import AccountBoxIcon from 'material-ui-icons/AccountBox'
import Hidden from 'material-ui/Hidden';
import Menu, { MenuItem } from 'material-ui/Menu';

import LeftMenu from './LeftMenu'

import { logOut } from '../actionCreators/login'

const css = {
  title: { flex: 1 }
}

class NavigationBar extends Component {
  constructor () {
    super()
    this.state = { 
      isLeftMenuOpen: false,
      isAccountMenuOpen: false
    }
  }

  @autobind
  openLeftMenu () {
    this.setState({isLeftMenuOpen: true})
  }

  @autobind
  openAccountMenu () {
    this.setState({isAccountMenuOpen: true})
  }

  render () {
    const { logOut, login } = this.props
    if (login.status !== 'success') {
      return <div />
    }

    return (
      <AppBar position='static'>
        <Toolbar>
          <Hidden lgUp>
            <IconButton onClick={this.openLeftMenu} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Hidden>          
          <LeftMenu type={'temporary'} open={this.state.isLeftMenuOpen} onClick={() => this.setState({isLeftMenuOpen: false})} />

          <Typography type='title' color='inherit' style={css.title}>Project manager</Typography>

          <IconButton id='account-btn' onClick={() => this.setState({isAccountMenuOpen: true})} color='contrast'>
            <AccountBoxIcon />
          </IconButton>
          <Menu 
            anchorEl={document.getElementById('account-btn')} 
            open={this.state.isAccountMenuOpen} 
            onRequestClose={() => this.setState({isAccountMenuOpen: false})}>
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={logOut}>Logout</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>)
  }
}

const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps, { logOut })(NavigationBar)
