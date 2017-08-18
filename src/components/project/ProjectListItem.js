import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Collapse from 'material-ui/transitions/Collapse'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import ExpandLessIcon from 'material-ui-icons/ExpandLess'
import { deepPurple } from 'material-ui/colors'

const style = {
    selected: {
        backgroundColor: deepPurple[500],
        color: 'white'
    },
    unselected: {
        backgroundColor: 'white'
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        borderRadius: '32px',
        margin: '8px'
    },
    content: {
        padding: '8px',
        color: 'inherit'
    },
    expand: {
        marginLeft: 'auto'
    }
}

class ProjectListItem extends Component {

    constructor () {
        super()
        this.state = { expanded: false };
    }

    handleExpandClick (event) {
        event.preventDefault()
        this.setState({ expanded: !this.state.expanded })
    }

    render () {
        const { project, selected, onSelect } = this.props
        return (
            <Paper style={selected ? style.selected : style.unselected} onClick={() => onSelect(project.id)}>
                <div style={style.wrapper}>
                    <img style={style.image} src='https://fakeimg.pl/64/' />
                    <div style={style.content}>
                        <Typography type='title'>{ project.name }</Typography>
                        <Typography type='subheading'>{ project.author }</Typography>
                    </div>
                    <IconButton style={style.expand}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more">
                        { this.state.expanded ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                    </IconButton>
                </div>

                <Collapse style={style.content} in={this.state.expanded} transitionDuration='auto' unmountOnExit>
                        <Typography paragraph>{ project.description }</Typography>
                </Collapse>
            </Paper>
        )
    }
}

export default ProjectListItem