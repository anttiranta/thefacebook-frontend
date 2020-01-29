// Imports
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// Image Imports
import noImage from '../../../resources/images/no-image.gif'

// App Imports
import { renderIf } from '../../../utils/elementUtils'
import userRoutes from '../../../setup/routes/user'

const ProfilePicture = (props) => {
    // TODO: show user's profile picture
    const user = props.user.details
    const me = props.me.details

    return (
        <div id="picture_box">
            <div style={{backgroundColor: '#4C70A0', color: 'white', textAlign: 'left'}}>
                <table style={{borderCollapse: 'collapse', width: '100%'}}>
                    <tbody>
                        <tr>
                            <td> Picture </td>
                            <td id="fb_link" style={{textAlign: 'right'}}>
                                {renderIf(user.id === me.id, () => (
                                    <span>
                                        <Link to={userRoutes.editProfile.path(me.username)}> [ edit ] </Link>
                                    </span>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><img src={noImage} height="200" width="250" style={{marginTop: '2px'}} alt="Avatar" /></p>
        </div>
    )
}

// Component State
function profilePictureState(state) {
    return {
        me: state.me
    }
}

export default connect(profilePictureState, null)(ProfilePicture)