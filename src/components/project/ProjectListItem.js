import React, { Component } from 'react'
import autobind from 'autobind-decorator'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Collapse from 'material-ui/transitions/Collapse'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Menu, { MenuItem } from 'material-ui/Menu'

// https://material.io/color/#!/?view.left=0&view.right=0&primary.color=81D4FA&secondary.color=C5E1A5&secondary.text.color=1B5E20&primary.text.color=424242

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
        const { project, onEdit, onDelete, onCreate } = this.props
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
                <Menu
                    open={this.state.menuOpen}
                    anchorEl={this.state.menuAnchor}
                    onRequestClose={this.closeMenu}>
                    <MenuItem onClick={onEdit}>Edit</MenuItem>
                    <MenuItem>Dashboard</MenuItem>
                    <MenuItem onClick={onDelete}>Delete</MenuItem>
                </Menu>
            </Paper>
        )
    }
}

export default ProjectListItem