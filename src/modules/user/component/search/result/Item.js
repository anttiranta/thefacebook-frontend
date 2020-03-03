// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import LinkContainer from '../../../../common/component/links_box/LinkContainer'
import LinkItem from '../../../../common/component/links_box/LinkItem'
import ClickableLink from '../../../../common/component/ClickableLink'
import { routes } from '../../../../../setup/routes'
import { setError, setNotice, setSuccess } from '../../../../common/component/notification/actions'
import { create } from '../../../../friend_request/redux/actions'
import { routeImage } from '../../../../../setup/routes'

// Image Imports
import noImage from '../../../../../resources/images/no-image.gif'

// Component
const Item = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const user = props.user
    const me = props.me.details

    const renderAsLinkItem = (element) => {
        return <tr><td>{element}</td></tr>
    }

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
        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3px', marginBottom: '2px' }}>
            <img src={user.profilePicture ? routeImage + user.profilePicture.file : noImage} height="100" style={{ marginLeft: '10px', padding: '2px' }} alt="Avatar" />

            <table style={{ maxWidth: '100%', display: "inline-block", marginLeft: '10px', marginBottom: "15px" }} >
                <tbody>
                    <tr>
                        <td style={{ verticalAlign: 'top' }}>Name: </td>
                        <td style={{ verticalAlign: 'top' }}>{user.name}</td>
                    </tr>
                    <tr>
                        <td style={{ verticalAlign: 'top' }}>Status: </td>
                        <td style={{ verticalAlign: 'top' }}>{user.status}</td>
                    </tr>
                    <tr>
                        <td style={{ verticalAlign: 'top' }}>Relationship Status: </td>
                        <td style={{ verticalAlign: 'top' }}>{user.relationship}</td>
                    </tr>
                    <tr>
                        <td style={{ verticalAlign: 'top' }}>Screenname: </td>
                        <td style={{ verticalAlign: 'top' }}>{user.username}</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ marginTop: "-86px", marginBottom: "5px", marginRight: "0", marginLeft: "565px" }}>
                <LinkContainer style={{ width: '120px' }}>
                    <LinkItem to={routes.profile.path(user.username)}>View Profile</LinkItem>
                    <LinkItem to={routes.friends.path(user.username)}>View Friends</LinkItem>
                    {renderAsLinkItem(
                        <ClickableLink onPress={onClickAddToFriend}>Add to Friend</ClickableLink>
                    )}
                    <LinkItem to={routes.construction.path}>Send Message</LinkItem>
                </LinkContainer><br />
            </div>
        </div>
    )
}

// Component Properties
Item.propTypes = {
    user: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired
}

// Component State
function itemStates(state) {
    return {
        me: state.me
    }
}

export default connect(itemStates, { create, setSuccess, setNotice, setError })(Item)