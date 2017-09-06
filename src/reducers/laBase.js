import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import user from './user'
import projects from './projects'

const coreReducer = combineReducers({ user, projects })

const laBaseReducer = reduceReducers(coreReducer)

export default laBaseReducer
