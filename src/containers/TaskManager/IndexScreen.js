import { connect } from 'react-redux'
import React, { Component } from 'react'

import List from 'material-ui/List'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';
import ProjectCard from '../../components/ProjectCard'
import Typography from 'material-ui/Typography'

class IndexScreen extends Component {
  render () {
    const { projects, user } = this.props
    console.log(projects, user)
    return (
      <div>
        <Typography type='display4'>Task Manager</Typography>

        <Paper>
          <List>
            {projects.map((project, index) => (
              <div key={project.id}>
                <ProjectCard project={project} />
                {index === (projects.length - 1) ? '' : <Divider />}
              </div>
            ))}
          </List>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ user, projects }) => ({ user, projects })

export default connect(mapStateToProps)(IndexScreen)
