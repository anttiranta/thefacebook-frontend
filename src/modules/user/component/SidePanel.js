// Imports
import React from 'react'
import { connect } from 'react-redux'

// App Imports
import pagesRoutes from '../../../setup/routes/pages'
import userRoutes from '../../../setup/routes/user'

const SidePanel = (props) => {
    return (
        <div id="side_panel">
            <div id="side_links">
                <a href={userRoutes.profile.path(props.me.details.username)}> My Profile </a>
                <a href={userRoutes.editProfile.path(props.me.details.username)}> [ edit ] </a><br />
                <a href={pagesRoutes.construction.path}> My Groups </a> <br />
                <a href={pagesRoutes.construction.path}> My Friends </a><br />
                <a href={pagesRoutes.construction.path}> My Messages </a><br />
                <a href={pagesRoutes.construction.path}> My Away Messages </a> <br />
                <a href={pagesRoutes.construction.path}> My Mobile Info </a> <br />
                <a href={pagesRoutes.construction.path}> My Account </a> <br />
                <a href={pagesRoutes.construction.path}> My Privacy </a> <br />
                <a href={pagesRoutes.construction.path}> Friend Requests </a><br />
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