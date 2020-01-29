// Imports
import React from 'react'
import { connect } from 'react-redux'

const MutualFriends = (props) => {
    const user = props.user.details
    const me = props.me.details

    return (
        <div id="connection_box">
            <div style={{color: 'white', backgroundColor: '#4C70A0', textAlign: 'left'}}>Mutual Friends</div>
            You have 19 friends in common with {user.name}
        </div>
    )
}

// Component State
function mutualFriendsState(state) {
    return {
        me: state.me
    }
}

export default connect(mutualFriendsState, null)(MutualFriends)