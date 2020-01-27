// Imports
import React from 'react'

// Images
import noImage from '../../../resources/images/no-image.gif'

// App Imports
import pagesRoutes from '../../../setup/routes/pages'

const ProfilePicture = () => {
    return (
        <div id="picture_box">
            <div style={{backgroundColor: '#4C70A0', color: 'white', textAlign: 'left'}}>
                <table style={{borderCollapse: 'collapse', width: '100%'}}>
                    <tbody>
                        <tr>
                            <td>Picture</td>
                            <td id="fb_link" style={{textAlign: 'right'}}><a href={pagesRoutes.home.path}>&nbsp;</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><img src={noImage} height="200" width="250" style={{marginTop: '2px'}} alt="Avatar" /></p>
        </div>
    )
}

export default ProfilePicture;