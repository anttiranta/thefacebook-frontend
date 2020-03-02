// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// App Imports
import { routeImage } from '../../../setup/routes'
import mediaGalleryRoutes from '../../../setup/routes/media_gallery'

// Component
const Item = (props) => {
    const { mediaGalleryEntry, isProfilePicture } = props

    const renderIsProfilePictureText = (isProfilePicture) => {
        return (
            <>
                <b>{isProfilePicture === true ? 'Profile picture' : ''} </b>
                {isProfilePicture === true ? <br /> : ''}
            </>
        )
    }

    return (
        <td>
            <span style={{ display: 'block', textAlign: 'center', marginTop: "10px" }}>
                { /* Is profile picture */}
                {renderIsProfilePictureText(isProfilePicture)}

                { /* Posted at */}
                {mediaGalleryEntry.createdAt ? new Date(parseInt(mediaGalleryEntry.createdAt)).toUTCString() : '(creation time unknown)'}
            </span>

            { /* Image & link */}
            <span key={mediaGalleryEntry} id="media_gallery_thumbnail_box">
                <Link to={mediaGalleryRoutes.mediaGalleryEntry.path(mediaGalleryEntry.id)}>
                    <img src={routeImage + mediaGalleryEntry.file} alt={mediaGalleryEntry.label} className="media_gallery_thumbnail" />
                </Link>
            </span>

            { /* Label */}
            <span style={{ display: 'block', textAlign: 'center', marginBottom: "5px" }}>{mediaGalleryEntry.label}</span>
        </td>
    )
}

// Component Properties
Item.propTypes = {
    mediaGalleryEntry: PropTypes.object.isRequired,
    isProfilePicture: PropTypes.bool,
}

export default withRouter(Item)