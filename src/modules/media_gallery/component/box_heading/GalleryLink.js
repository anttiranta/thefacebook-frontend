// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// App Imports
import userRoutes from '../../../../setup/routes/user'

// Component
const GalleryLink = (props) => {
    const { user } = props

    return (
        <Link to={userRoutes.mediaGallery.path(user.username)}>[ back to gallery ]</Link>
    )
}

// Component Properties
GalleryLink.propTypes = {
    user: PropTypes.object.isRequired
}

export default GalleryLink