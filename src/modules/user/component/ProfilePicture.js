// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Image Imports
import noImage from '../../../resources/images/no-image.gif'

const ProfilePicture = (props) => {
    const user = props.user.details

    return (
        <div id="picture_box">
            <div style={{ backgroundColor: '#4C70A0', color: 'white', textAlign: 'left' }}>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tbody>
                        <tr>
                            <td> Picture </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                {/* TODO: show user's profile picture */}
                <img src={noImage} height="200" width="250" style={{ marginTop: '2px' }} alt="Avatar" />
            </p>
        </div>
    )
}

// Component Properties
ProfilePicture.propTypes = {
    user: PropTypes.object.isRequired,
}

export default ProfilePicture