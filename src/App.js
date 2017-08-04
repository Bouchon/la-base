import { Provider } from 'react-redux'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './containers/HomeScreen'
import Navigation from './components/Navigation'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <Route exact path='' component={HomeScreen} />
      </div>
    </Router>
  </Provider>
)

export default App
