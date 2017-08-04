import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from '../actionCreators/user'

export default function currentUser (state = { loginState: 'logged-out' }, action) {
  switch (action.type) {
    case LOGIN_START:
      return { loginState: 'pending' }

    case LOGIN_FAILURE:
      return { loginState: 'failure' }

    case LOGIN_SUCCESS: {
      const { email } = action.payload
      return { loginState: 'success', email }
    }

    case LOGOUT:
      return { loginState: 'logged-out' }

    default:
      return state
  }
}