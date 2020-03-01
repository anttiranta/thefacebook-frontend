// Imports
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// App Imports
import pages from '../../../setup/routes/pages'

// Component
const AuthUserCheck = (props) => (
    props.me.isAuthenticated && props.me.details.id === props.expectedUserId ? '' : <Redirect to={pages.home.path} />
)

// Component Properties
AuthUserCheck.propTypes = {
    me: PropTypes.object.isRequired,
    expectedUserId: PropTypes.string.isRequired
}

// Component State
function authUserCheckState(state) {
    return {
        me: state.me
    }
}

export default connect(authUserCheckState, {})(AuthUserCheck)