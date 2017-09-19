import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from '../actionCreators/user'
/*LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGOUT*/

export default function login (state = { status: 'logged-out' }, action) {
  const { payload } = action
  switch (action.type) {
    case LOGIN: return { status: 'pending' }    
    case LOGOUT: return { ...state, status: 'logged-out', response: payload.response }
    case LOGIN_SUCCESS: return { status: 'success', response: payload.response }
    case LOGIN_ERROR: return { ...state, status: 'error', response: payload.response }
    default: return state
  }
}