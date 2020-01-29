// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// App Imports
import userRoutes from '../../../setup/routes/user'

// Component
const RoutePrivate = (props) => (
  props.me.isAuthenticated
        ? <Route {...props} component={props.component} />
        : <Redirect to={userRoutes.login.path} />
)

// Component Properties
RoutePrivate.propTypes = {
  me: PropTypes.object.isRequired
}

// Component State
function routePrivateState(state) {
  return {
    me: state.me
  }
}

export default connect(routePrivateState, {})(RoutePrivate);