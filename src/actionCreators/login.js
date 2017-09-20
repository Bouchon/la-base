export const LOGIN = '@@LABASE/LOGIN'
export const LOGOUT = '@@LABASE/LOGOUT'
export const LOGIN_SUCCESS = '@@LABASE/LOGIN_SUCCESS'
export const LOGIN_ERROR = '@@LABASE/LOGIN_ERROR'

export function logIn(id, password) {
  return dispatch => {
    dispatch({ type: LOGIN, payload: { status: 'pending' } })
    setTimeout(() => {
      if (id === password) {
        const user = { name: id }
        dispatch(loginSuccess(user))
      } else {
        const error = 'Invalid user name or password'
        dispatch(loginError(error))
      }
    }, 1000)
  }
}
export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, payload: { status: 'success', response: user } }
}
export function loginError(error) {
  return { type: LOGIN_ERROR, payload: { status: 'error', response: error } }
}
export function logOut(user) {
  return { type: LOGOUT, payload: { status: 'logged-out', response: null } }
}