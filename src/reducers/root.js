import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import login from './login'
import projects from './projects'

const rootReducer = combineReducers({ login, projects })

export default rootReducer