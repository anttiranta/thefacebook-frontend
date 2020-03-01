// Imports
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// App Imports
import SidePanel from '../../common/component/SidePanel'
import { getById } from '../redux/actions'
import BoxHeading from '../component/box_heading/BoxHeading'
import Loading from '../../common/component/Loading'
import { renderIf } from '../../../utils/elementUtils'
import { routes } from '../../../setup/routes'
import { routeImage } from '../../../setup/routes'

const MediaGalleryEntry = (props) => {
    const prevProps = useRef(false)

    const isEdited = (mediaGalleryEntry) => {
        return mediaGalleryEntry.updatedAt 
            && mediaGalleryEntry.updatedAt > mediaGalleryEntry.createdAt
    }

    useEffect(() => {
        if (!prevProps.current || prevProps.current.location.pathname !== props.location.pathname) {
            if (props.match.params.id && !props.entry.isLoading) {
                props.getById(props.match.params.id)
            }
        }
        prevProps.current = props
    }, [props])

    let { isLoading, error } = props.entry
    let entry = props.entry.details

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
                        : renderIf(entry && entry.id, () => (
                            <>
                                {/* SEO */}
                                <Helmet>
                                    <title>{`${entry.label} - Thefacebook`}</title>
                                </Helmet>

                                {/* Side panel */}
                                <SidePanel />

                                {/* Main container */}
                                <div id="media_gallery_entry_box">
                                    <BoxHeading user={entry.user} entry={entry} />

                                    <h1 style={{textAlign: 'center'}}>[ {entry.label} {isEdited(entry) ? ' (edited)' : ''} ]</h1>
                                    <div style={{textAlign: 'center'}}>
                                        <img src={routeImage + entry.file} alt={entry.label}  />
                                    </div>
                                </div>
                            </>
                        ))
                    : <Redirect to={routes.notFound.path} />
            }
        </div>
    )
}

// Component State
function mgeStates(state) {
    return {
        entry: state.mediaGalleryEntry
    }
}

export default withRouter(connect(mgeStates, { getById })(MediaGalleryEntry))