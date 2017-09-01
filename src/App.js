import { Provider } from 'react-redux'
import React from 'react'
import { Route } from 'react-router-dom'

import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'

import Layout from './containers/Layout'
import PrivateRoute from './containers/PrivateRoute'
import HomeScreen from './containers/HomeScreen'
import ProjectsScreen from './containers/ProjectsScreen'
import ProjectScreen from './containers/ProjectScreen'

import LeftMenu from './components/LeftMenu'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Layout>
      <div>
        <Route exact path='/' component={HomeScreen} /> 
        <Route exact path='/projects' component={ProjectsScreen} />
        <Route exact path='/project' component={ProjectScreen} />
      </div>
    </Layout>
  </Provider>
)

export default App
