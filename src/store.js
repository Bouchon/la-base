import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'

import rootReducer from './reducers/root'

const DEFAULT_STATE = {
  login: {
    status: 'logged-out',
    response: ''
  },
  users: {
    '0': { id: 0, login: 'admin', firstname: 'admin', lastname: 'admin', email: 'admin@admin.com' },
    '1': { id: 1, login: 'test', firstname: 'test', lastname: 'test', email: 'admin@admin.com' }
  },
  projects: {
    '0': { id: 0, authorId: 0, name: 'Project manager', description: 'Description', startDate: '', endDate: '' }
  },
  tasks: {
    '0': { id: 0, authorId: 0, projectId: 0, name: 'Task 1', description: 'Description 1', status: 'todo', startDate: '', endDate: '' },
    '1': { id: 1, authorId: 0, projectId: 0, name: 'Task 2', description: 'Description 2', status: 'todo', startDate: '', endDate: '' }
  },
  usersProjects: {
    '0': { id: 0, userId: 0, projectId: 0 },
    '1': { id: 1, userId: 1, projectId: 0 }
  },
  usersTasks: {
    '0': { id: 0, userId: 0, taskId: 0 },
    '1': { id: 1, userId: 1, taskId: 0 },
    '2': { id: 2, userId: 1, taskId: 1 }
  }
}

export default function configureStore () {
  const store = createStore(
    rootReducer, 
    DEFAULT_STATE, 
    compose(
      applyMiddleware(thunk),
      autoRehydrate(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )  
  persistStore(store, { whitelist: ['login', 'projects'], storage: localForage })

  if (module.hot) {
    module.hot.accept('./reducers/root', () => {
      const nextRootReducer = require('./reducers/root')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}