import React, { Component } from 'react'
import { Redirect } from 'react-router'

import Menu, { MenuItem } from 'material-ui/Menu'

class ProjectMenu extends Component {

    constructor () {
        super()
        this.state = {
            redirect: false,
            redirectTo: '',
        }
    }

    render () {

        if (this.state.redirect === true) {
            return <Redirect to={this.state.redirectTo} />
        }

        const { projectId } = this.props
        const { open, anchor, onClose, onDelete } = this.props
        return (
            <Menu
                open={open}
                anchorEl={anchor}
                onRequestClose={onClose}>
                <MenuItem onClick={() => this.setState({ redirect: true, redirectTo: '/project/' + projectId })}>Edit</MenuItem>
                <MenuItem onClick={() => this.setState({ redirect: true, redirectTo: '/dashboard/' + projectId })}>Dashboard</MenuItem>
                <MenuItem onClick={onDelete}>Delete</MenuItem>
            </Menu>
        )
    }
}

export default ProjectMenu