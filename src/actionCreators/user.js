export const LOGIN = '@@LABASE/LOGIN'
export const LOGOUT = '@@LABASE/LOGOUT'
export const LOGIN_SUCCESS = '@@LABASE/LOGIN_SUCCESS'
export const LOGIN_ERROR = '@@LABASE/LOGIN_ERROR'

export function login(id, password) {
  return dispatch => {
    setTimeout(() => {
      if (id === admin && password === 'admin') {
        dispatch(loginSuccess({name: admin}))
      } else {
        dispatch(loginError())
      }
    }, 3000)
  }
  return { type: LOGIN }
}
export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, status: 'success', response: { user } }
}
export function loginError() {
  return { type: LOGIN, status: 'error', response: 'Incorrect id or password'}
}
export function logout(user) {
  return { type: LOGOUT }
}

/*
export function logIn (logon, password) {
  const body = JSON.stringify({ logon, password })
  {
    type: LOGIN_START,
    payload: { logon: logon },
    meta: {
      offline: {
        effect: { url: '/api/v1/sessions', method: 'POST', body },
        commit: { type: LOGIN_SUCCESS, payload: { logon: logon } },
        rollback: { type: LOGIN_FAILURE, payload: { logon: logon } }
      }
    }
  }
}

export function logInFailure (logon) {
  return { type: LOGIN_FAILURE, payload: { logon: logon } }
}

export function logInStart (logon) {
  return { type: LOGIN_START }
}

export function logInSuccess (logon) {
  return { type: LOGIN_SUCCESS, payload: { logon: logon } }
}

export function logOut (logon) {
  return { type: LOGOUT, payload: { logon: logon } }
}*/
