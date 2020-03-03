// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// App Imports
import { routeImage } from '../../../setup/routes'
import mediaGalleryRoutes from '../../../setup/routes/media_gallery'
import { formatAsLocaleAMPMDate } from '../../../utils/dateUtils'
import { add3Dots } from '../../../utils/stringUtils'

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
                {mediaGalleryEntry.createdAt ? formatAsLocaleAMPMDate(new Date(parseInt(mediaGalleryEntry.createdAt))) : '(creation time unknown)'}
            </span>

            { /* Image & link */}
            <span key={mediaGalleryEntry} className="media_gallery_thumbnail_box">
                <Link to={mediaGalleryRoutes.mediaGalleryEntry.path(mediaGalleryEntry.id)}>
                    <img src={routeImage + mediaGalleryEntry.file} alt={mediaGalleryEntry.label} className="media_gallery_thumbnail" />
                </Link>
            </span><br/>

            { /* Label */}
            <span className="media_gallery_thumbnail_label">{add3Dots(mediaGalleryEntry.label)}</span>
        </td>
    )
}

// Component Properties
Item.propTypes = {
    mediaGalleryEntry: PropTypes.object.isRequired,
    isProfilePicture: PropTypes.bool,
}

export default withRouter(Item)