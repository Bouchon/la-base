import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'
import { reducer } from 'react-redux-oauth2'

import login from './user'
import projects from './projects'



//const coreReducer = combineReducers({ user, projects, oauth: reducer })
const coreReducer = combineReducers({ login, projects, oauth: reducer })
const laBaseReducer = reduceReducers(coreReducer) 
//reduceReducers(coreReducer)

export default laBaseReducer