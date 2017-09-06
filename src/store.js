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
    description: 'Procedente igitur mox tempore cum adventicium nihil inveniretur, relicta ora maritima in Lycaoniam adnexam Isauriae se contulerunt ibique densis intersaepientes itinera praetenturis provincialium et viatorum opibus pascebantur.',
    startDate: '',
    endDate: '',
    documents: []
  }, {
    id: 1,
    author: 'admin',
    name: 'Second projet',
    description: 'Siquis enim militarium vel honoratorum aut nobilis inter suos rumore tenus esset insimulatus fovisse partes hostiles, iniecto onere catenarum in modum beluae trahebatur et inimico urgente vel nullo, quasi sufficiente hoc solo, quod nominatus esset aut delatus aut postulatus, capite vel multatione bonorum aut insulari solitudine damnabatur.',
    startDate: '',
    endDate: '',
    documents: []
  }, {
    id: 2,
    author: 'admin',
    name: 'Troisième projet',
    description: 'Quam ob rem ut ii qui superiores sunt submittere se debent in amicitia, sic quodam modo inferiores extollere. Sunt enim quidam qui molestas amicitias faciunt, cum ipsi se contemni putant; quod non fere contingit nisi iis qui etiam contemnendos se arbitrantur; qui hac opinione non modo verbis sed etiam opere levandi sunt.',
    startDate: '',
    endDate: '',
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
