// Imports
import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import LinkContainer from '../../../../common/component/links_box/LinkContainer'
import LinkItem from '../../../../common/component/links_box/LinkItem'
import { routes } from '../../../../../setup/routes'

// Image Imports
import noImage from '../../../../../resources/images/no-image.gif'

// Component
const Item = (props) => {

    const user = props.user

    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3px', marginBottom: '2px' }}>
            <img src={user.profilePicture ? user.profilePicture : noImage} height="100" width="150" style={{ marginLeft: '10px', padding: '2px' }} alt="Avatar" />

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
                        <td style={{ verticalAlign: 'top' }}>School: </td>
                        <td style={{ verticalAlign: 'top' }}><a href={routes.construction.path}>My School</a></td>
                    </tr>
                </tbody>
            </table>

            <div style={{ marginTop: "-86px", marginBottom: "5px", marginRight: "0", marginLeft: "565px" }}>
                <LinkContainer style={{ width: '120px' }}>
                    <LinkItem to={routes.profile.path(user.username)}>View Profile</LinkItem>
                    <LinkItem to={routes.friends.path(user.id)}>View Friends</LinkItem>
                    <LinkItem to={routes.construction.path}>Add to Friend</LinkItem>{/* TODO: if already a friend, dont show? */}
                    <LinkItem to={routes.construction.path}>Send Message</LinkItem>
                </LinkContainer><br />
            </div>
        </div>
    )
}

// Component Properties
Item.propTypes = {
    user: PropTypes.object.isRequired
}

export default Item;