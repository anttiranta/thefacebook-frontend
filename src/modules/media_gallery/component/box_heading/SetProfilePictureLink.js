// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// App Imports
import { setProfilePicture } from '../../../user/redux/actions/me'
import ClickableLink from '../../../common/component/ClickableLink'
import userRoutes from '../../../../setup/routes/user'
import { setError, setNotice, setSuccess } from '../../../common/component/notification/actions'

// Component
const SetProfilePictureLink = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const { entry, me } = props

    const onClickSetProfilePicture = async () => {
        if (isLoading) {
            return
        }

        setIsLoading(true)

        props.setNotice('Setting profile picture, please wait...')

        try {
            const redirectUrl = userRoutes.mediaGallery.path(entry.user.username)

            await props.setProfilePicture(entry.id, me.id)

            props.setSuccess('Profile picture updated successfully.')

            props.history.push(redirectUrl)
        } catch (exception) {
            props.setError(exception.message)
        }

        setIsLoading(false)
    }

    return (
        <ClickableLink onPress={onClickSetProfilePicture}>[ set as profile picture ]</ClickableLink>
    )
}

// Component Properties
SetProfilePictureLink.propTypes = {
    entry: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired,
    setProfilePicture: PropTypes.func.isRequired, 
}

export default withRouter(connect(null, {
    setError,
    setNotice,
    setSuccess,
    setProfilePicture 
})(SetProfilePictureLink))