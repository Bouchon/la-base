import React, { Component } from 'react'

import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import AccountIcon from 'material-ui-icons/AccountCircle'

const css = {
    roundSize: { width: '64px', height: '64px'},
    item: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }
}

class UserListItem extends Component {
    render () {
        const { user, add } = this.props
        if (!add) {
            return (
                <div style={css.item}>
                    <Avatar style={css.roundSize}><AccountIcon style={css.roundSize} /></Avatar>
                    <Typography>{user.name}</Typography>
                </div>
            )
        } else {
            return (
                <div style={css.item}>
                    <Button style={css.roundSize} fab color='accent'><AddIcon /></Button>
                    <Typography>Add user</Typography>
                </div>
            )
        }
    }
}

export default UserListItem