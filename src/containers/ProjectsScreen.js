import { connect } from 'react-redux'
import React, { Component } from 'react'

import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Typography from 'material-ui/Typography'

import ProjectList from '../components/project/ProjectList'

const css = {
  wrapper: { 
    display: 'flex',
    flexDirection: 'column'
  },
  addButton: {
    alignSelf: 'center'
  }
}

class ProjectsScreen extends Component {
  render () {
    const { projects, user } = this.props
    return (
      <div style={css.wrapper}>
        <Typography type='display3'>Projects</Typography>
        <ProjectList projects={projects} />
        <Button style={css.addButton} fab color='primary' aria-label='add'><AddIcon /></Button>
      </div>
    )
  }
}

const mapStateToProps = ({ user, projects }) => ({ user, projects })

export default connect(mapStateToProps)(ProjectsScreen)
