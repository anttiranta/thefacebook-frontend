// Imports
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// App Imports
import ProfilePicture from '../component/ProfilePicture'
import Links from '../component/Links'
import Connection from '../component/Connection'
import SidePanel from '../../common/component/SidePanel'
import Info from '../component/Info'
import InfoForm from '../component/InfoForm'
import MutualFriends from '../component/MutualFriends'
import { routes } from '../../../setup/routes'
import { getByUsername } from '../redux/actions/users'
import Loading from '../../common/component/Loading'
import { renderIf } from '../../../utils/elementUtils'
import { apostrophize } from '../../../utils/stringUtils'
import { getUrlParam } from '../../../utils/uriUtils'

const Profile = (props) => {

    const prevProps = useRef(false)

    const isEditable = (props) => {
        const editable = getUrlParam(
            props.location.pathname, 
            props.match.params.account + '/edit'
        ) !== null

        // check ownership of the profile
        return editable && props.user.details.id === props.me.details.id
    }

    useEffect(() => {
        if (!prevProps.current || prevProps.current.location.pathname !== props.location.pathname) {
            if (props.match.params.account && !props.user.isLoading) {
                props.getByUsername(props.match.params.account)
            }
        }
        prevProps.current = props
    }, [props])

    let { isLoading, error } = props.user
    let user = props.user.details

    if (!prevProps.current) {
        isLoading = true
        error = false
    }

    return (
        <div id="content">
            {
                !error
                    ? isLoading
                        ? <Loading />
                        : renderIf(user && user.id, () => (
                            <>
                                {/* SEO */}
                                <Helmet>
                                    <title>{`User - ${ user.name }`}</title>
                                </Helmet>

                                {/* Side panel */}
                                <SidePanel />

                                 {/* Profile details */}
                                <div id="profile_box">
                                    <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>
                                        {apostrophize(user.name)} Profile 
                                        {renderIf(user.id === props.me.details.id, () => (' (This is you)'))}
                                    </div>

                                    <div id="profile_left_side">
                                        <ProfilePicture user={props.user} />
                                        <Links user={props.user} />
                                        <Connection user={props.user} />

                                        {renderIf(user.id !== props.me.details.id, () => (
                                            <MutualFriends user={props.user} />
                                        ))}
                                        
                                    </div>
                                    {
                                        isEditable(props)
                                            ? <InfoForm />
                                            : <Info user={props.user} />
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