import { Provider } from 'react-redux'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'

import Layout from './containers/Layout'
import PrivateRoute from './containers/PrivateRoute'
import HomeScreen from './containers/HomeScreen'
import ProjectsScreen from './containers/ProjectsScreen'
import ProjectScreen from './containers/ProjectScreen'
import ProjectDashboard from './containers/ProjectDashboard'

import LeftMenu from './components/LeftMenu'
import configureStore from './store'

const App = () => (
  <Provider store={configureStore()}>
    <Layout>
      <div>
        <Route exact path='/' component={HomeScreen} /> 
        <Route path='/projects' component={ProjectsScreen} />
        <Route path='/dashboard/:id' component={ProjectDashboard} />
        <Switch>
          <Route path='/project/create' component={ProjectScreen} />
          <Route path='/project/:id' component={ProjectScreen} />
        </Switch>
      </div>
    </Layout>
  </Provider>
)

export default App
