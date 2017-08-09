import { connect } from 'react-redux'
import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ExitToApp from 'material-ui-icons/ExitToApp'

import LeftMenu from './LeftMenu'

import { logOut } from '../actionCreators/user'

const css = {
  title: { flex: 1 }
}

class NavigationBar extends Component {
  constructor () {
    super()
    this.state = { menuOpen: false }
  }
  render () {
    const { logOut, user } = this.props
    if (user.loginState !== 'success') {
      return <div />
    }

    return (
      <header>
        <AppBar position='static' color='default'>
          <Toolbar>
            <IconButton onClick={() => this.setState({menuOpen: true})}><MenuIcon /></IconButton>
            <Typography type='title' color='inherit' style={css.title}>LA BASE</Typography>
            <Typography type='caption' color='inherit'>Logout</Typography>
            <IconButton onClick={logOut}><ExitToApp /></IconButton>
          </Toolbar>
        </AppBar>
        <LeftMenu open={this.state.menuOpen} onClose={() => this.setState({menuOpen: false})} />
      </header>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, { logOut })(NavigationBar)
