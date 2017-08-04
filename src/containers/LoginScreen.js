import { connect } from 'react-redux'
import React, { Component } from 'react'

export class LoginScreen extends Component {
  render () {
    return (
      <h1>LOGIN</h1>
    )
  }
}

const mapStateToProps = ({ user: { loginState } }) => ({ loginState })

export default connect(mapStateToProps)(LoginScreen)
