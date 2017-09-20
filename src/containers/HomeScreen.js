import React, { Component } from 'react'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import Demo from '../components/test/Demo'

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Typography type='display3'>Home</Typography>
      </div>
    )
  }
}

const mapStateToProps = ({ user, projects, oauth }) => ({ user, projects })
export default connect(mapStateToProps)(HomeScreen)