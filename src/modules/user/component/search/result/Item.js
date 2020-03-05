// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import SendFriendRequestLink from '../../../../friend_request/component/SendFriendRequestLink'
import LinkContainer from '../../../../common/component/links_box/LinkContainer'
import LinkItem from '../../../../common/component/links_box/LinkItem'
import { routes } from '../../../../../setup/routes'
import { setError, setNotice, setSuccess } from '../../../../common/component/notification/actions'
import { create } from '../../../../friend_request/redux/actions'
import { routeImage } from '../../../../../setup/routes'

// Image Imports
import noImage from '../../../../../resources/images/no-image.gif'

// Component
const Item = (props) => {
    const user = props.user

    const renderAsLinkItem = (element) => {
        return <tr><td>{element}</td></tr>
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
                        <SendFriendRequestLink user={user} />
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
    setError: PropTypes.func.isRequired,
    setNotice: PropTypes.func.isRequired,
    setSuccess: PropTypes.func.isRequired
}

export default connect(null, { create, setSuccess, setNotice, setError })(Item)