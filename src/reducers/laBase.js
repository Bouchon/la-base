import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import user from './user'

const coreReducer = combineReducers({ user })

const laBaseReducer = reduceReducers(coreReducer)

export default laBaseReducer
