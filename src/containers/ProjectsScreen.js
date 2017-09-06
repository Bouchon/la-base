import { connect } from 'react-redux'
import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { Redirect } from 'react-router'

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

  constructor () {
    super()
    this.state = {
      project: undefined,
      onEdit: false,
      onDelete: false,
      onCreate: false
    }
  }

  @autobind
  onEditProject(project) {
    this.setState({project: project, onEdit: true})
  }

  @autobind
  onDeleteProject(project) {
    this.setState({project: project, onDelete: true})
  }

  @autobind
  onCreateProject() {
    this.setState({onCreate: true})
  }

  render () {
    const { projects, user } = this.props

    if (this.state.onCreate || this.state.onEdit) {
      return <Redirect to={'/project/' + this.state.project.id} />
    }

    return (
      <div style={css.wrapper}>
        <Typography type='display3'>Projects</Typography>
        <ProjectList 
          projects={projects}
          onEdit={(project) => this.onEditProject(project)}
          onDelete={(project) => this.onDeleteProject(project)}
          onCreate={() => this.onCreateProject()} />
        <Button fab
          onClick={this.onCreate}
          style={css.addButton} 
          color='primary' 
          aria-label='add'>
          <AddIcon />
        </Button>
      </div>
    )
  }
}

const mapStateToProps = ({ user, projects }) => ({ user, projects })

export default connect(mapStateToProps)(ProjectsScreen)
