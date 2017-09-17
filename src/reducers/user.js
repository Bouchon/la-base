import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actionCreators/user'
/*LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT*/

export default function login (state = { status: 'logged-out' }, action) {
  switch (action.type) {
    case LOGIN: return { ...state, status: 'pending' }    
    case LOGIN_SUCCESS: return { ...state, status: 'success', user: action.user }
    case LOGIN_ERROR: return { ...state, status: 'error', response: action.response }
    case LOGOUT: return { ...state, status: 'logged-out' }
  }
}

/*
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
}*/
