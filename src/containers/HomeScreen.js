import React, { Component } from 'react'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import { actions, reducer, signin, signout } from 'react-redux-oauth2'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import Demo from '../components/test/Demo'

class HomeScreen extends Component {

  constructor () {
    super()
    this.state = { gitterAuthorizeUrl: '' }
  }
  
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(actions.config({
      client_id: 'c5a0f4fcd415f0bf84bce4ce414bf3da6864805f',
      client_secret: '6efbdd8f76f54bbb42825d9af8e739dcda7905f7',
      url: 'http://localhost:3000/api/v1', // your oauth server root 
      providers: {
        gitter: '/auth/gitter' // provider path 
      }
    }))
  }

  handleSignin (e) {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(actions.signin({
      username: this.refs.username.value,
      password: this.refs.password.value
    }))
  }

  render () {
    const { oauth } = this.props
    const Signin = signin({
      popup: {},      // popup settings 
      success () {console.log('success')},  // invoke when signin success 
      failed () {console.log('failed')},   // invoke when signin failed 
      cancel () {console.log('cancel')}    // invoke when signin cancel 
    })(props => <button {...props} />)
    const Signout = signout()(props => <button {...props} />)
    return (
      <div>
        <form onSubmit={this.handleSignin.bind(this)}>
          <input type='text' name='username' ref='username' placeholder='username' />
          <input type='password' name='password' ref='password' placeholder='password' />
          <Button type='submit' disabled={oauth.authenticating}>Signin</Button>
        </form>
        <hr />
        <Signin provider='gitter'>Signin</Signin>
        <hr />
        <Signout>Signout</Signout>
      </div>
    )
  }
}

const mapStateToProps = ({ user, projects, oauth }) => ({ user, projects, oauth })

export default connect(mapStateToProps)(HomeScreen)
