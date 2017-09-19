import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'

import laBaseReducer from './reducers/laBase'

const DEFAULT_STATE = {
  login: {
    status: 'logged-out',
    response: ''
  },
  projects: [{
    id: 0,
    author: 'admin',
    name: 'Premier projet',
    description: 'Procedente igitur mox tempore cum adventicium nihil inveniretur, relicta ora maritima in Lycaoniam adnexam Isauriae se contulerunt ibique densis intersaepientes itinera praetenturis provincialium et viatorum opibus pascebantur.',
    startDate: '',
    endDate: '',
    documents: []
  }]
}

export default function configureStore () {
  const store = createStore(
    laBaseReducer, 
    DEFAULT_STATE, 
    compose(
      applyMiddleware(thunk),
      autoRehydrate(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )  
  persistStore(store, { whitelist: ['login', 'projects'], storage: localForage })

  if (module.hot) {
    module.hot.accept('./reducers/laBase', () => {
      const nextRootReducer = require('./reducers/laBase')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

/*
const persistConfig = {
  whitelist: [ 'login' ], // only keep user logged in :)
  storage: localForage
}
persistStore(store, persistConfig)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/laBase')
    store.replaceReducer(nextRootReducer)
  })
}

export default store
*/