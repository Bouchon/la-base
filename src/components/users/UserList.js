import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import UserListItem from './UserListItem'

const css = {
    list: { display: 'flex', margin: '15px 0', padding: 5 }
}

const users = [
    { name: 'Admin admin' },
    { name: 'Florian Knoblauch' },
    { name: 'Jean Neymar' },
    { name: 'Jean Michel' },
]

class UserList extends Component {
    render () {
        return (
            <Paper style={css.list}>
                <UserListItem user={users[0]} />
                <UserListItem user={users[1]} />
                <UserListItem user={users[2]} />
                <UserListItem user={users[3]} />
                <UserListItem add />
            </Paper>
        )
    }
}

export default UserList