// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import { calcMutualFriendsAmount } from '../helper/friends'

const MutualFriends = (props) => {
    const user = props.user.details
    const me = props.me.details

    return (
        <div id="connection_box">
            <div style={{color: 'white', backgroundColor: '#4C70A0', textAlign: 'left'}}>Mutual Friends</div>
            You have { calcMutualFriendsAmount(user, me)} friends in common with {user.name}
        </div>
    )
}

// Component Properties
MutualFriends.propTypes = {
    user: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired
}

// Component State
function mutualFriendsState(state) {
    return {
        me: state.me
    }
}

export default connect(mutualFriendsState, null)(MutualFriends)