import { connect } from 'react-redux'
import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import List from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography'

import ProjectList from '../components/project/ProjectList'

class TaskManagerScreen extends Component {
  render () {
    const { projects, user } = this.props
    return (
      <Grid container>
          <Grid item xs={3}>
              <ProjectList projects={projects} />
          </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = ({ user, projects }) => ({ user, projects })

export default connect(mapStateToProps)(TaskManagerScreen)
