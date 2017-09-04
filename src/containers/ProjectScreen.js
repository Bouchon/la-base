import { connect } from 'react-redux'
import React, { Component } from 'react'
import { format } from 'date-fns'
import frLocale from 'date-fns/locale/fr'

import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

import DatePicker from '../components/DatePicker'
import UserList from '../components/users/UserList'

const css = {
    container: { padding: '0 2vw', width: '70vw' },
    projectAvatar: { width: 128, height: 128, alignSelf: 'center' },
    datePicker: { display: 'flex', justifyContent: 'space-around', padding: '10px 0' }
}

class ProjectScreen extends Component {

    constructor () {
        super()
        this.state = {
            id: null,
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            users: []
        }
    }

    formatDate (date) { return date === '' ? '' : format(date, 'ddd Do MMM YYYY', { locale: frLocale }) }

    render () {
        const { project, user } = this.props
        return (
            <Grid style={css.container} container direction='column'>
                <Avatar style={css.projectAvatar} src='https://fakeimg.pl/128/' />
                <TextField label='Name' placeholder='Project name' margin='normal' />
                <TextField label='Description' placeholder='Project description' margin='normal' multiline rows={3} />
                <div style={css.datePicker}>
                    <DatePicker 
                        label='Start date' 
                        onSelect={(date) => this.setState({startDate: date})}
                        date={this.formatDate(this.state.startDate)} />
                    <DatePicker 
                        label='End date' 
                        onSelect={(date) => this.setState({endDate: date})}
                        date={this.formatDate(this.state.endDate)} />
                </div>
                <UserList />
                <Button raised color='primary'>{this.state.id === null ? 'Create' : 'Save'}</Button>
            </Grid>
        )
    }
}

const mapStateToProps = ({ user, project }) => ({ user, project })

export default connect(mapStateToProps)(ProjectScreen)