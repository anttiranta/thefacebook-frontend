// Imports
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// App Imports
import SidePanel from '../../common/component/SidePanel'
import FriendList from '../component/friends/List'
import FriendRequestList from '../../friend_request/component/List'
import { getByUsername } from '../redux/actions/users'
import Loading from '../../common/component/Loading'
import { renderIf } from '../../../utils/elementUtils'
import { routes } from '../../../setup/routes'
import { apostrophize } from '../../../utils/stringUtils'

const Friends = (props) => {

    const prevProps = useRef(false)

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
    const me = props.me.details

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
                                    <title>{`${apostrophize(user.name)} friends`}</title>
                                </Helmet>

                                {/* Side panel */}
                                <SidePanel />

                                {/* Main container */}
                                <div id="terms_box">
                                    <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>Friends</div><br />
                                    {
                                        /* If logged in user's profile, render friend requests */
                                        renderIf(me.id === user.id, () => (
                                            <FriendRequestList user={user} />
                                        ))
                                    }
                                    <FriendList user={user} />
                                </div>
                            </>
                        ))
                    : <Redirect to={routes.notFound.path} />
            }
        </div>
    )
}

// Component State
function friendsStates(state) {
    return {
        user: state.user,
        me: state.me
    }
}

export default withRouter(connect(friendsStates, { getByUsername })(Friends))