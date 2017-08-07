import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

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
    console.log(this.userEmail, this.password)
    this.props.dispatch(logIn(this.userEmail, this.password))
  }

  render () {
    const { loginState } = this.props
    const loggingIn = loginState === 'pending'


    return (
      <form style={style.main} onSubmit={this.login}>
        <Paper style={style.container} elevation={4}>
            <Typography type='title'>Login</Typography>
            <TextField
              onChange={(event) => { this.userEmail = event.target.value }}
              label='Label'
              type='email'
              InputProps={{ placeholder: 'foo@bar.com' }}
              margin='normal'
              fullWidth

            />
            <TextField
              onChange={(event) => { this.password = event.target.value }}
              label='Password'
              type='password'
              margin='normal'
              fullWidth
              onInvalid={() => alert('invalid')}
            />
            <Button type='submit' raised color='primary' style={style.button}>{loginState}</Button>
        </Paper>
      </form>
    )
  }
}

const mapStateToProps = ({ user: { loginState } }) => ({ loginState })

export default connect(mapStateToProps)(LoginScreen)
