// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import { setError, setNotice, setSuccess } from '../../common/component/notification/actions'
import { accept, decline, getListByReceiver } from '../redux/actions'
import { routeImage } from '../../../setup/routes'

// Image Imports
import noImage from '../../../resources/images/no-image.gif'

// Component
const Item = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const request = props.friendRequest

    const onClickAccept = () => {
        if (!request.creator.id || !request.receiver.id) {
            props.setError('There was some error with accepting friend request. Please try again.')
        }

        setIsLoading(true)
        props.setNotice('Processing, please wait...')

        props.accept(request.creator.id, request.receiver.id)
            .then(response => {
                if (response.data.errors && response.data.errors.length > 0) {
                    props.setError(response.data.errors[0].message)
                } else {
                    props.setSuccess(request.creator.name + ' was added to your friends.')
                    
                    setIsLoading(false)
                }
            }).catch(error => {
                props.setError('There was some error with accepting friend request. Please try again.')
            }).then(() => {
                props.getListByReceiver(request.receiver.id)
            })
    }

    const onClickDecline = () => {
        if (!request.creator.id || !request.receiver.id) {
            props.setError('There was some error with declining friend request. Please try again.')
        }

        setIsLoading(true)
        props.setNotice('Processing, please wait...')

        props.decline(request.creator.id, request.receiver.id)
            .then(response => {
                if (response.data.errors && response.data.errors.length > 0) {
                    props.setError(response.data.errors[0].message)
                } else {
                    props.setSuccess('You have declined friend request of ' + request.creator.name)
                    
                    setIsLoading(false)
                }
            }).catch(error => {
                props.setError('There was some error with declining friend request. Please try again.')
            }).then(() => {
                props.getListByReceiver(request.receiver.id)
            })
    }

    const { profilePicture, creator, createdAt } = request

    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3px', marginBottom: '2px' }}>
            <img src={profilePicture ? routeImage + profilePicture.file : noImage} height="100" width="150" style={{ marginLeft: '10px', verticalAlign: 'middle', padding: '2px' }} alt="Avatar" />

            <div style={{ display: "inline-block", marginLeft: '10px' }}>
                {creator.name}<br />
                {createdAt ? 'Request sent: ' + new Date(parseInt(createdAt)).toDateString(): ''}
            </div>

            <div style={{ float: 'right', marginTop: '40px', marginRight: '15px' }}>
                <div id="fb_button" style={{ float: 'left', textAlign: 'center', marginRight: '5px' }}>
                    <input type="button" disabled={isLoading} onClick={onClickAccept} value="Accept" />
                </div>
                <button disabled={isLoading} onClick={onClickDecline}>Ignore</button>
            </div>
        </div>
    )
}

// Component Properties
Item.propTypes = {
    friendRequest: PropTypes.object.isRequired,
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired,
    getListByReceiver: PropTypes.func.isRequired,
    accept: PropTypes.func.isRequired,
    decline: PropTypes.func.isRequired
}

export default connect(null, {accept, decline, getListByReceiver, setSuccess, setNotice, setError})(Item)