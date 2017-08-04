import { connect } from 'react-redux'
import React, { Component } from 'react'

import LoginScreen from './LoginScreen'

export class HomeScreen extends Component {
  render () {
    if (this.props.loggedIn === false) {
      return <LoginScreen />
    } else {
      return <h1>Connected</h1>
    }
  }
}

function mapStateToProps ({ user: { loginState } }) {
  return { loggedIn: loginState === 'success' }
}

export default connect(mapStateToProps)(HomeScreen)
