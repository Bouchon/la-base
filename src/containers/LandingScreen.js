import React, { Component } from 'react'
import Card, { CardContent } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious'
import PlayArrowIcon from 'material-ui-icons/PlayArrow'
import SkipNextIcon from 'material-ui-icons/SkipNext'

class LandingScreen extends Component {
  render () {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
        <Card style={{ display: 'flex', height: '200px', width: '400px' }}>
          <div>
            <CardContent>
              <Typography type='headline'>Live From Space</Typography>
              <Typography type='subheading' color='secondary'>
                Mac Miller
              </Typography>
            </CardContent>
            <div>
              <IconButton aria-label='Previous'>
                <SkipPreviousIcon />
              </IconButton>
              <IconButton aria-label='Play/pause'>
                <PlayArrowIcon />
              </IconButton>
              <IconButton aria-label='Next'>
                <SkipNextIcon />
              </IconButton>
            </div>
          </div>
          <div>
            <img src='https://s-media-cache-ak0.pinimg.com/736x/cc/3f/6f/cc3f6f144d0944e7b43eac23b8c8aef1--kawaii-marshmallow-marshmallow-treats.jpg' alt='Live from space album cover' />
          </div>
        </Card>
      </div>
    )
  }
}

export default LandingScreen
