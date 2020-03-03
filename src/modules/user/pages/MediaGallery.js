// Imports
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// App Imports
import SidePanel from '../../common/component/SidePanel'
import MediaGalleryEntryGrid from '../component/media_gallery/Grid'
import { getByUsername } from '../redux/actions/users'
import Loading from '../../common/component/Loading'
import BoxHeading from '../component/media_gallery/BoxHeading'
import { renderIf } from '../../../utils/elementUtils'
import { routes } from '../../../setup/routes'
import { apostrophize } from '../../../utils/stringUtils'

const MediaGallery = (props) => {
    const prevProps = useRef(false)

    useEffect(() => {
        if (!prevProps.current || prevProps.current.location.pathname !== props.location.pathname) {
            if (props.match.params.account && !props.user.isLoading) {
                props.getByUsername(props.match.params.account, ['profilePicture'])
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
                                    <title>{`${apostrophize(user.name)} Photos - Thefacebook`}</title>
                                </Helmet>

                                {/* Side panel */}
                                <SidePanel />

                                {/* Main container */}
                                <div id="terms_box">
                                    <BoxHeading user={user} />
                                    <MediaGalleryEntryGrid user={user} />
                                </div>
                            </>
                        ))
                    : <Redirect to={routes.notFound.path} />
            }
        </div>
    )
}

// Component State
function mediaGalleryStates(state) {
    return {
        user: state.user
    }
}

export default connect(mediaGalleryStates, { getByUsername })(MediaGallery)