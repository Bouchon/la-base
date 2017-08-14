import { Provider } from 'react-redux'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './containers/HomeScreen'
import TaskManagerScreen from './containers/TaskManagerScreen'
import PrivateRoute from './containers/PrivateRoute'
import NavigationBar from './components/NavigationBar'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <NavigationBar />
        <Route exact path='/' component={HomeScreen} />
        <PrivateRoute exact path='/TaskManager' component={TaskManagerScreen} />
      </div>
    </Router>
  </Provider>
)

export default App
