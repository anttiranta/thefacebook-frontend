// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Image Imports
import mediaGalleryRoutes from '../../../setup/routes/media_gallery'
import { routeImage } from '../../../setup/routes'
import noImage from '../../../resources/images/no-image.gif'

const ProfilePicture = (props) => {
    const user = props.user.details
    const me = props.me.details

    return (
        <div id="picture_box">
            <div style={{ backgroundColor: '#4C70A0', color: 'white', textAlign: 'left' }}>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tbody>
                        <tr>
                            <td> Picture </td>
                            {
                                user.id === me.id && user.profilePicture ?
                                    <>
                                        <td id="fb_link" style={{ textAlign: 'right' }}>
                                            <Link to={mediaGalleryRoutes.editEntry.path(user.profilePicture.id)}> [ edit ] </Link>
                                        </td>
                                    </>
                                    : <td>&nbsp;</td>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                <img 
                    src={user.profilePicture ? (routeImage + user.profilePicture.file) : noImage} 
                    width="250" 
                    style={{ marginTop: '2px' }} 
                    alt="Avatar" 
                />
            </p>
        </div>
    )
}


// Component Properties
ProfilePicture.propTypes = {
    user: PropTypes.object.isRequired,
}

// Component State
function profilePictureState(state) {
    return {
        me: state.me
    }
}

export default connect(profilePictureState, null)(ProfilePicture)