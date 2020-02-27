// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// App Imports
import { routeImage } from '../../../setup/routes'
import mediaGalleryRoutes from '../../../setup/routes/media_gallery'

// Component
const Item = (props) => {
    const { mediaGalleryEntry } = props

    return (
        <td>
            {/* TODO: show whether a default image or not */}
            <span style={{ display: 'block', textAlign: 'center', marginTop: "10px" }}>
                {mediaGalleryEntry.createdAt ? new Date(parseInt(mediaGalleryEntry.createdAt)).toUTCString() : '(creation time unknown)'}
            </span>
            <span key={mediaGalleryEntry} style={{ marginTop: "5px", marginLeft: "10px", textAlign: 'center', display: 'inline-block'}}>
                <Link to={mediaGalleryRoutes.mediaGalleryEntry.path(mediaGalleryEntry.id)}>
                    <img src={routeImage + mediaGalleryEntry.file} alt={mediaGalleryEntry.label} class="media_gallery_thumbnail" />
                </Link>
            </span>
            <span style={{ display: 'block', textAlign: 'center',  marginBottom: "5px" }}>{mediaGalleryEntry.label}</span>
        </td>
    )
}

// Component Properties
Item.propTypes = {
    mediaGalleryEntry: PropTypes.object.isRequired,
}

export default withRouter(Item)