import React, { Component } from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const style = {
  card: {
    display: 'flex'
  },
  cover: {
    width: '128px',
    height: '128px',
    overflow: 'hidden'
  }
}

class ProjectCard extends Component {
  render () {
    const { project } = this.props
    return (
      <Card style={style.card}>
        <div style={style.cover}>
          <img src='https://s-media-cache-ak0.pinimg.com/736x/cc/3f/6f/cc3f6f144d0944e7b43eac23b8c8aef1--kawaii-marshmallow-marshmallow-treats.jpg' />
        </div>
        <div>
          <CardContent>
            <Typography type='headline'>{project.name}</Typography>
            <Typography type='subheading'>{project.author}</Typography>
          </CardContent>
        </div>
      </Card>
    )
  }
}

export default ProjectCard
