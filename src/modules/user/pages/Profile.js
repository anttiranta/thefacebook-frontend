// Imports
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// App Imports
import ProfilePicture from '../component/ProfilePicture'
import Links from '../component/Links'
import Connection from '../component/Connection'
import SidePanel from '../component/SidePanel'
import Info from '../component/Info'
import InfoForm from '../component/InfoForm'
import { routes } from '../../../setup/routes'
import { getByUsername } from '../actions/users'
import Loading from '../../common/component/Loading'
import { renderIf } from '../../../utils/elementUtils'
import { apostrophize } from '../../../utils/stringUtils'
import { getUrlParam } from '../helper/uriHelper'

const Profile = (props) => {

    const isEditable = (props) => {
        const param = getUrlParam(props.location.pathname, "edit")
        const editable = (!isNaN(param) && param > 0 && param <= 1)
        
        // check ownership of profile
        return editable && props.user.details.id === props.me.details.id 
    }

    useEffect(() => {
        const username = getUrlParam(props.location.pathname, "profile")
        if (username && !props.user.isLoading) {
            if (username !== props.user.details.username) {
                props.getByUsername(username)
            }
        }
    }, [props])

    let { isLoading, error } = props.user
    let user = props.user.details

    return (
        <div id="content">
            {
                !error
                    ? isLoading
                        ? <Loading />
                        : renderIf(user && user.id, () => (
                            <>
                                <SidePanel />
                                <div id="profile_box">
                                    <div style={{ backgroundColor: '#4C70A0', color: 'white' }}> 
                                        {apostrophize(user.name)} Profile
                                    </div>

                                    <div id="profile_left_side">
                                        <ProfilePicture user={user} />
                                        <Links user={user} />
                                        <Connection user={user} />
                                    </div>
                                    {
                                        isEditable(props)
                                            ? <InfoForm />
                                            : <Info user={user} />
                                    }
                                </div>
                            </>
                            ))
                    : <Redirect to={routes.notFound.path} />
            }
        </div>
    )
}

// Component State
function profileStates(state) {
    return {
        user: state.user,
        me: state.me
    }
}

export default withRouter(connect(profileStates, { getByUsername })(Profile))