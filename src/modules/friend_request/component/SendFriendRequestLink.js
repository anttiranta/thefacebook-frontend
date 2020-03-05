// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import ClickableLink from '../../common/component/ClickableLink'
import { setError, setNotice, setSuccess } from '../../common/component/notification/actions'
import { create } from '../redux/actions'

// Component
const SendFriendRequestLink = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const { children, user } = props
    const me = props.me.details

    const onClickAddToFriend = () => {
        if (isLoading) {
            return
        }
        setIsLoading(true)

        props.setNotice('Sending friend request, please wait...')

        props.create(me.id, user.id)
            .then(response => {
                if (response.data.errors && response.data.errors.length > 0) {
                    props.setError(response.data.errors[0].message)
                } else {
                    props.setSuccess('Friend request sent successfully.')
                }
            })
            .catch(error => {
                props.setError('There was some error sending friend request. Please try again.')
            })
            .then(() => {
                setIsLoading(false)
            })
    }

    return (
        <ClickableLink onPress={onClickAddToFriend}>{ children || 'Add to Friend'}</ClickableLink>
    )
}

// Component Properties
SendFriendRequestLink.propTypes = {
    user: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired
}

// Component State
function sfrLinkStates(state) {
    return {
        me: state.me
    }
}

export default connect(sfrLinkStates, {
    create, 
    setSuccess, 
    setNotice, 
    setError
})(SendFriendRequestLink)