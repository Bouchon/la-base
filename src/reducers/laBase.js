import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'
import { reducer } from 'react-redux-oauth2'

import user from './user'
import projects from './projects'

const coreReducer = combineReducers({ user, projects, oauth: reducer })

const laBaseReducer = reduceReducers(coreReducer)

export default laBaseReducer
