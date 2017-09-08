export const LOGIN_FAILURE = '@@GOALTRACKER/AUTH_LOGIN_FAILURE'
export const LOGIN_START = '@@GOALTRACKER/AUTH_LOGIN_START'
export const LOGIN_SUCCESS = '@@GOALTRACKER/AUTH_LOGIN_SUCCESS'
export const LOGOUT = '@@GOALTRACKER/AUTH_LOGOUT'

export function logIn (logon, password) {
  const body = JSON.stringify({ logon, password })
  return {
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
}
