// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
//import PropTypes from 'prop-types'

// App Imports
import userRoutes from '../../../setup/routes/user'

// Component
const AuthCheck = (props) => (
  props.me.isAuthenticated ? <Redirect to={userRoutes.profile.path(props.me.details.username)}/> : ''
)

// Component Properties
/*AuthCheck.propTypes = {
  user: PropTypes.object.isRequired
}*/

// Component State
function authCheckState(state) {
  return {
    me: state.me
  }
}

export default connect(authCheckState, {})(AuthCheck)