import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { CircularProgress } from 'material-ui/Progress'

import { logIn } from '../actionCreators/user'

const style = {
  main: {
    margin: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    width: '350px'
  },
  button: {
    alignSelf: 'flex-end'
  }
}

export class LoginScreen extends Component {
  @autobind
  login (event) {
    event.preventDefault()
    this.props.dispatch(logIn(this.logon, this.password))
  }

  render () {
    const { status, response } = this.props.login
    const { logIn } = this.props
    const loggingIn = status === 'pending'
    return (
      <form style={style.main} onSubmit={this.login}>
        <Paper style={style.container} elevation={4}>
            <Typography type='title'>Login</Typography>
            <TextField
              onChange={(event) => { this.logon = event.target.value }}
              label='Login'
              type='text'
              InputProps={{ placeholder: 'Login' }}
              margin='normal'
              fullWidth
              required
            />
            <TextField
              onChange={(event) => { this.password = event.target.value }}
              label='Password'
              type='password'
              margin='normal'
              fullWidth
              onInvalid={() => alert('invalid')}
              required
            />

            {status === 'error' ? <Typography color='accent'>{response}</Typography> : ''}
            
            <Button type='submit' raised color='primary' style={style.button}>
              { status === 'pending' ? <CircularProgress color='accent' size={14} /> : 'login' }
            </Button>
        </Paper>
      </form>
    )
  }
}

const mapStateToProps = ({ login }) => ({ login })

export default connect(mapStateToProps)(LoginScreen)
