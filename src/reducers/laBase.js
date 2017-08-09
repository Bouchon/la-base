import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import user from './user'
import taskManagerProjects from './TaskManager/projects'

const coreReducer = combineReducers({ user, taskManagerProjects })

const laBaseReducer = reduceReducers(coreReducer)

export default laBaseReducer
