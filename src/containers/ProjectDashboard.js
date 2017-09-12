import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

import GroupIcon from 'material-ui-icons/Group'
import WorkIcon from 'material-ui-icons/Work'
import DateRangeIcon from 'material-ui-icons/DateRange'
import FolderIcon from 'material-ui-icons/Folder'

const css = {
    buttons: { width: 75, height: 75, margin: 10 }
}

class ProjectDashboard extends Component {

    constructor () {
        super()
        this.state = { 
            id: undefined,
            author: '',
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            documents: []
        }
    }

    componentDidMount () {
        const projectId = this.props.match.params.id
        if (projectId !== undefined) {
            const project = this.props.projects.filter(p => p.id === parseInt(projectId))
            this.setState({...project[0] })
            this.mode = 'edition'
        } else {
            const { user } = this.props
            this.setState({...this.state.project, author: user.logon})
            this.mode = 'creation'
        }
    }

    render () {
        const { projects, user } = this.props

        return (
            <div>
                <Typography type='display2'>{this.state.name}</Typography>
                <Grid container>
                    <Button fab style={css.buttons} raised><GroupIcon /></Button >
                    <Button fab style={css.buttons} raised><WorkIcon /></Button >
                    <Button fab style={css.buttons} raised><DateRangeIcon /></Button >
                    <Button fab style={css.buttons} raised><FolderIcon /></Button >
                </Grid>
                <Grid container>
                    Time line...
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = ({ user, projects }) => ({ user, projects })

export default connect(mapStateToProps)(ProjectDashboard)