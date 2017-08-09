import { connect } from 'react-redux'
import React, { Component } from 'react'

import ProjectCard from '../../components/ProjectCard'
import Typography from 'material-ui/Typography'

const style = {
  projects: {
    display: 'flex'
  }
}

class IndexScreen extends Component {
  render () {
    const { projects, user } = this.props
    console.log(projects, user)
    return (
      <div>
        <Typography type='display4'>Task Manager</Typography>

        <div style={style.projects}>
          {projects.map((project) =>
            <ProjectCard key={project.id} project={project} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user, projects }) => ({ user, projects })

export default connect(mapStateToProps)(IndexScreen)
