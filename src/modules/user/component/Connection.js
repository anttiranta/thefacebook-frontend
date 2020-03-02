// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Connection = (props) => {
    const user = props.user.details
    const me = props.me.details

    const resolveConnection = (user, me) => {
        if (user.id === me.id) {
            return 'This is you'
        }

        let found = false
        if (user.friends && user.friends.length > 0) {
            user.friends.forEach(friend => {
                if (friend.id === me.id) {
                    found = true
                    return           
                }
            });
        }
        return found === true ? 'You are friends' : 'You are not connected'
    }

    return (
        <div id="connection_box">
            <div style={{color: 'white', backgroundColor: '#4C70A0', textAlign: 'left'}}>Connection</div>
            {resolveConnection(user, me)}
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