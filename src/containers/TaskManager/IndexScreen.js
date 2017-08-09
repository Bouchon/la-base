import { connect } from 'react-redux'
import React, { Component } from 'react'

import Typography from 'material-ui/Typography'

class IndexScreen extends Component {
  render () {
    const { projects, user } = this.props
    console.log(projects, user)
    return (
      <div>
        <Typography type='display4'>Task Manager</Typography>
        {projects.map((project) =>
          <p key={project.id}>{project.name}</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ user, projects }) => ({ user, projects })

export default connect(mapStateToProps)(IndexScreen)
