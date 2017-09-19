import { connect } from 'react-redux'
import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { Redirect } from 'react-router'

import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Typography from 'material-ui/Typography'

import ProjectList from '../components/project/ProjectList'

import { removeProject } from '../actionCreators/projects'

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
      onCreate: false
    }
  }

  deleteProject ({id}) {
    const { removeProject } = this.props
    removeProject(id)
  }

  render () {
    const { projects } = this.props

    // Add or update
    if (this.state.onCreate || this.state.onEdit) {
      const projectId = this.state.onCreate ? 'create' : this.state.project.id
      return <Redirect to={'/project/' + projectId} />
    }

    return (
      <div style={css.wrapper}>
        <Typography type='display3'>Projects</Typography>
        <ProjectList 
          projects={projects}
          onEdit={(project) => this.setState({project: project, onEdit: true})}
          onDelete={(project) => this.deleteProject(project)} />
        <Button fab
          onClick={() => this.setState({onCreate: true})}
          style={css.addButton} 
          color='primary' 
          aria-label='add'>
          <AddIcon />
        </Button>
      </div>
    )
  }
}

const mapStateToProps = ({ projects }) => ({ projects })

export default connect(mapStateToProps, { removeProject })(ProjectsScreen)
