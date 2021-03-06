import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

class PrivateRoute extends Component {
  render () {
    const { component, ...rest } = this.props

    return <Route {...rest} render={(props) => <PrivateComponent component={component} {...props} />} />
  }
}

class PrivateInnerComponent extends Component {
  render () {
    const { component, loggedIn, ...props } = this.props
    const shouldPush = props.history.action === 'PUSH'

    if (loggedIn) {
      return React.createElement(component, props)
    }

    return <Redirect push={shouldPush} to={{ pathname: '/', state: { from: props.location } }} />
  }
}

const mapStateToProps = ({ user: { loginState } }) => ({ loggedIn: loginState === 'success' })
const PrivateComponent = connect(mapStateToProps)(PrivateInnerComponent)

export default PrivateRoute
