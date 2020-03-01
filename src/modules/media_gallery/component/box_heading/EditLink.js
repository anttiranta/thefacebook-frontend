// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// App Imports
import mediaGalleryRoutes from '../../../../setup/routes/media_gallery'

// Component
const EditLink = (props) => {
    const { entry } = props

    return (
        <Link to={mediaGalleryRoutes.editEntry.path(entry.id)}>[ edit ]</Link>
    )
}

// Component Properties
EditLink.propTypes = {
    entry: PropTypes.object.isRequired
}

export default EditLink