// Imports
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import pagesRoutes from '../../../setup/routes/pages'
import userRoutes from '../../../setup/routes/user'

const SidePanel = (props) => {
    const me = props.me.details

    return (
        <div id="side_panel">
            <div id="side_links">
                <Link to={userRoutes.profile.path(me.username)}> My Profile </Link>
                <Link to={userRoutes.editProfile.path(me.username)}> [ edit ] </Link><br />
                <Link to={pagesRoutes.construction.path}> My Groups </Link> <br />
                <Link to={pagesRoutes.friends.path(me.id)}> My Friends </Link><br />
                <Link to={pagesRoutes.construction.path}> My Messages </Link><br />
                <Link to={pagesRoutes.construction.path}> My Away Messages </Link> <br />
                <Link to={pagesRoutes.construction.path}> My Mobile Info </Link> <br />
                <Link to={pagesRoutes.construction.path}> My Account </Link> <br />
                <Link to={pagesRoutes.construction.path}> My Privacy </Link> <br />
            </div>
        </div>
    )
}

// Component State
function sidePanelState(state) {
    return {
        me: state.me
    }
}

export default connect(sidePanelState, null)(SidePanel)