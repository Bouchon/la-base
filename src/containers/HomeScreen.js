import React, { Component } from 'react'

import Typography from 'material-ui/Typography'

import Demo from '../components/test/Demo'

class HomeScreen extends Component {
  render () {
    return (
      <div>
        <Typography type='display4'>Home</Typography>
        <Demo />
      </div>
    )
  }
}

export default HomeScreen
