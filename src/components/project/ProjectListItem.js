import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Collapse from 'material-ui/transitions/Collapse'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'

import ProjectMenu from './ProjectMenu'

const css = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        margin: '15px 0'
    },
    image: {
        borderRadius: '32px',
        margin: '8px'
    },
    content: {
        padding: '8px',
        color: 'inherit'
    },
    more: {
        marginLeft: 'auto'
    }
}

class ProjectListItem extends Component {
    constructor () {
        super()
        this.state = { 
            menuOpen: false,
            menuAnchor: undefined
        }
    }

    openMenu = (event) => {
        this.setState({
            menuOpen: true,
            menuAnchor: event.currentTarget
        })
    }
    
    closeMenu = (event) => this.setState({menuOpen: false})

    render () {
        const { project, onDelete } = this.props
        return (
            <Paper style={css.wrapper}>
                <img style={css.image} src='https://fakeimg.pl/64/' />
                <div style={css.content}>
                    <Typography type='title'>{ project.name }</Typography>
                    <Typography type='subheading'>{ project.author }</Typography>
                </div>
                <IconButton 
                    style={css.more}
                    onClick={this.openMenu}>
                    <MoreVertIcon />
                </IconButton>
                <ProjectMenu
                    projectId={project.id}
                    open={this.state.menuOpen}
                    anchor={this.state.menuAnchor}
                    onClose={() => this.setState({ menuOpen: false })}
                    onDelete={onDelete} />
            </Paper>
        )
    }
}

export default ProjectListItem