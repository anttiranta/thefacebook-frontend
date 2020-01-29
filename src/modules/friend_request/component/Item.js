// Imports
import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import LinkContainer from '../../common/component/links_box/LinkContainer'
import LinkItem from '../../common/component/links_box/LinkItem'
import { routes } from '../../../setup/routes'
import { calcMutualFriendsAmount } from '../../user/helper/friends'

// Image Imports
import noImage from '../../../resources/images/no-image.gif'

// Component
const Item = (props) => {

    const user = props.user

    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3px', marginBottom: '2px' }}>
            <img src={user.profilePicture ? user.profilePicture : noImage} height="100" width="150" style={{ marginLeft: '10px', verticalAlign: 'middle', padding: '2px' }} alt="Avatar" />

            <div style={{ display: "inline-block", marginLeft: '10px' }}>
                {user.name}<br />
                {/* TODO: mutual friends amount if no message */}
                Hi.
            </div>

            <div style={{ float: 'right', marginTop: '40px', marginRight: '15px' }}>
                <div id="fb_button" style={{ float: 'left', textAlign: 'center', marginRight: '5px' }}>
                    <input type="submit" name="submit" value="Confirm" />
                </div>
                <button>Not now</button>
            </div>
        </div>
    )
}

// Component Properties
Item.propTypes = {
    user: PropTypes.object.isRequired
}

export default Item;