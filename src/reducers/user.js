import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT } from '../actionCreators/user'

export default function currentUser (state = { logon: '', loginState: 'logged-out' }, action) {
  
  switch (action.type) {
    case LOGIN_START:
      const { logon } = action.payload
      return { loginState: 'pending', logon: logon }

    case LOGIN_FAILURE:
      return { ...state, loginState: 'failure' }

    case LOGIN_SUCCESS: {
      return { ...state, loginState: 'success' }
    }

    case LOGOUT:
      return { ...state, loginState: 'logged-out' }

    default:
      return state
  }
}
