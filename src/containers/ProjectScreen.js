import { connect } from 'react-redux'
import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import { format } from 'date-fns'
import frLocale from 'date-fns/locale/fr'
import { Redirect } from 'react-router'

import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import DatePicker from '../components/DatePicker'
import UserList from '../components/users/UserList'

import { addProject, updateProject } from '../actionCreators/projects'

const css = {
    container: { padding: '0 2vw', width: '70vw' },
    projectAvatar: { width: 128, height: 128, alignSelf: 'center' },
    datePicker: { display: 'flex', justifyContent: 'space-around', padding: '10px 0' }
}

const defaultState = {
    id: null,
    authorId: null,
    name: null,
    description: null,
    startDate: null,
    endDate: null,
    documents: null
}

class ProjectScreen extends Component {

    constructor () {
        super()
        this.state = { 
            project: {},
            mode: {},
            redirect: false
        }
    }

    componentWillMount () {
        const projects = this.props.projects
        const projectId = this.props.match.params.id
        const mode = projectId === undefined ? 'create' : 'edit'
        const project = projectId === undefined ? defaultState : projects[projectId]

        this.setState({project, mode})
    }

    @autobind
    updateProject () {
        const { updateProject } = this.props
        updateProject(this.state.project)
        this.setState({ redirect: true })
    }

    @autobind 
    addProject () {
        const { addProject } = this.props
        addProject(this.state.project)
        this.setState({ redirect: true })
    }

    render () {
        if (this.state.redirect === true) {
            return <Redirect to='/projects' />
        }

        const title = this.mode === 'edition' ? 'Edit' : 'Create'
        const submitButton = <Button raised color='primary' onClick={this.mode === 'edition' ? this.updateProject : this.addProject}>{title}</Button>

        return (
            <Grid style={css.container} container direction='column'>
                <Typography type='display2'>{title} Project</Typography>
                <Avatar style={css.projectAvatar} src='https://fakeimg.pl/128/' />
                <TextField
                    value={this.state.project.name}
                    onChange={ event => this.setState({ project: { ...this.state.project, name: event.target.value } }) }
                    label='Name' 
                    placeholder='Project name' 
                    margin='normal' />
                <TextField multiline
                    value={this.state.project.description}
                    onChange={ event => this.setState({ project: { ...this.state.project, description: event.target.value} }) }
                    rows={3}
                    label='Description' 
                    placeholder='Project description' 
                    margin='normal' />
                    
                <div style={css.datePicker}>
                    <DatePicker
                        value={this.state.project.startDate}
                        onChange={ date => this.setState({ project: { ...this.state.project, startDate: date } }) }
                        label='Start date' />
                    <DatePicker
                        value={this.state.project.endDate}
                        onChange={ date => this.setState({ project: { ...this.state.project, endDate: date } }) }
                        label='End date' />
                </div>
                <UserList />
                { submitButton }
            </Grid>
        )
    }
}

const mapStateToProps = ({ login, projects }) => ({ login, projects })

export default connect(
    mapStateToProps, 
    { addProject, updateProject }
)(ProjectScreen)