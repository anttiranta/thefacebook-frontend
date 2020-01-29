// Imports
import React from 'react'
import { connect } from 'react-redux'

const Connection = (props) => {

    // TODO: we need to know the real connection
    const connection = props.user !== null && props.user.id === props.me.details.id ? 'This is you' : 'You are not connected'

    return (
        <div id="connection_box">
            <div style={{color: 'white', backgroundColor: '#4C70A0', textAlign: 'left'}}>Connection</div>
            {connection}
        </div>
    )
}

// Component State
function connectionState(state) {
    return {
        me: state.me
    }
}

export default connect(connectionState, null)(Connection)