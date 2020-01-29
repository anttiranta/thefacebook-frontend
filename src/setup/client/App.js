// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import NotFound from '../../modules/common/component/NotFound'
import RoutePrivate from '../../modules/auth/component/RoutePrivate'
import Layout from '../../modules/common/component/Layout'

const App = () => {
  return (
    <Layout>
      <Switch>
        {Object.values(routes).map((route, index) => (
          route.auth
            ? <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
            : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
        ))}
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  )
}

export default App;