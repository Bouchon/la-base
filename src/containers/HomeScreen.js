import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import Demo from '../components/test/Demo'

class HomeScreen extends Component {

  @autobind
  login () {
    console.log('click...')
    const req = new XMLHttpRequest()
    req.withCredentials = true
    req.open('GET', '/api/v1/auth', true)
    req.send(null)

    console.log('RESULT', req)
  }

  render () {
    return (
      <div>
        <Button raised onClick={this.login}>o</Button>
        <Typography type='display4'>Home</Typography>
        <Demo />
      </div>
    )
  }
}

export default HomeScreen
