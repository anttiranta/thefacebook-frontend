// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// App Imports
import { remove } from '../../redux/actions'
import ClickableLink from '../../../common/component/ClickableLink'
import userRoutes from '../../../../setup/routes/user'
import { setError, setNotice, setSuccess } from '../../../common/component/notification/actions'

// Component
const RemoveLink = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const { entry, me } = props

    const onClickRemove = async () => {
        if (isLoading) {
            return
        }

        if (window.confirm(`Are you sure you want to remove this photo?`)) {
            setIsLoading(true)

            props.setNotice('Removing photo, please wait...')

            try {
                const redirectUrl = userRoutes.mediaGallery.path(entry.user.username)

                await props.remove(entry.id, me.id)

                props.setSuccess('Photo removed successfully.')

                props.history.push(redirectUrl)
            } catch (exception) {
                props.setError(exception.message)
            }

            setIsLoading(false)
        }
    }

    return (
        <ClickableLink onPress={onClickRemove}>[ remove ]</ClickableLink>
    )
}

// Component Properties
RemoveLink.propTypes = {
    entry: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

export default withRouter(connect(null, {
    setError,
    setNotice,
    setSuccess,
    remove
})(RemoveLink))