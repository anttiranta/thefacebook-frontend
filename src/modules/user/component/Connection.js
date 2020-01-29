// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Connection = (props) => {
    const user = props.user.details
    const me = props.me.details

    // TODO: we need to know the real connection
    const connection = user.id === me.id ? 'This is you' : 'You are not connected'

    return (
        <div id="connection_box">
            <div style={{color: 'white', backgroundColor: '#4C70A0', textAlign: 'left'}}>Connection</div>
            {connection}
        </div>
    )
}

// Component Properties
Connection.propTypes = {
    user: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired
}

// Component State
function connectionState(state) {
    return {
        me: state.me
    }
}

export default connect(connectionState, null)(Connection)