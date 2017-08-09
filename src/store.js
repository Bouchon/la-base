import { compose, createStore } from 'redux'
import localForage from 'localforage'
import { offline } from 'redux-offline'
import offlineConfig from 'redux-offline/lib/defaults'

import laBaseReducer from './reducers/laBase'

const DEFAULT_STATE = {
  user: {
    loginState: 'failure',
    logon: ''
  },
/*
  users: [
      { login: 'admin', name: 'Administrateur' },
      { login: 'toto', name: 'Toto' },
      { login: 'titi', name: 'Titi' }
  ],*/

  projects: [{
    id: 0,
    author: 'admin',
    name: 'Premier projet',
    description: 'Description',
    startDate: null,
    endDate: null,
    documents: []
  }, {
    id: 2,
    author: 'admin',
    name: 'Second projet',
    description: 'Description',
    startDate: null,
    endDate: null,
    documents: []
  }]
  /* tasks: [{
    id: 0,
    author: 'admin',
    name: 'Première tache',
    description: 'Description',
    users: ['toto', 'titi'],
    startDate: null,
    endDate: null,
    documents: []}]*/
}

const reduxOfflineConfig = {
  ...offlineConfig,
  persistOptions: {
    storage: localForage
  }
}

let enhancer
if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    offline(reduxOfflineConfig),
    (createStore) => (reducer, preloadedState, enhancer) => enhancer(createStore)(reducer, preloadedState)
  )
} else {
  enhancer = compose(
    offline(reduxOfflineConfig)
  )
}

const store = createStore(laBaseReducer, DEFAULT_STATE, enhancer)

if (module.hot) {
  module.hot.accept('./reducers/laBase', () => {
    const nextGTR = require('./reducers/laBase')
    store.replaceReducer(nextGTR)
  })
}

export default store
