// Imports
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import userRoutes from '../../../setup/routes/user'
import pagesRoutes from '../../../setup/routes/pages'
import { formatAsLocaleAMPMDate } from '../../../utils/dateUtils'

const Info = (props) => {
    const info = props.user.details
    const me = props.me.details

    return (
        <div id="information_box">
            <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tbody>
                        <tr>
                            <td>Information</td>
                            {
                                info.id === me.id ?
                                    <>
                                        <td id="fb_link" style={{ textAlign: 'right' }}>
                                            <Link to={userRoutes.editProfile.path(me.username)}> [ edit ] </Link>
                                        </td>
                                    </>
                                    : <td>&nbsp;</td>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Account Info:</th>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{info.name}</td>
                    </tr>
                    <tr>
                        <td>Member Since:</td>
                        <td>{info.memberSince ? formatAsLocaleAMPMDate(new Date(parseInt(info.memberSince))) : ''}</td>
                    </tr>
                    <tr>
                        <td>Last Updated:</td>
                        <td>{info.updatedAt ? formatAsLocaleAMPMDate(new Date(parseInt(info.updatedAt))) : ''}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Basic Info:</th>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><a href={'mailto:' + info.email}>{info.email}</a></td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>{info.status}</td>
                    </tr>
                    <tr>
                        <td>Sex:</td>
                        <td>{info.gender}</td>
                    </tr>
                    <tr>
                        <td>Year:</td>
                        <td>{info.year}</td>
                    </tr>
                    <tr>
                        <td>Concentation:</td>
                        <td>{info.concentation}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><Link to={pagesRoutes.construction.path}>{info.phone}</Link></td>
                    </tr>
                    <tr>
                        <td>School:</td>
                        <td><Link to={pagesRoutes.construction.path}>{info.school}</Link></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Extended Info:</th>
                    </tr>
                    <tr>
                        <td>Screenname:</td>
                        <td>{info.username}</td>
                    </tr>
                    <tr>
                        <td>Looking For:</td>
                        <td>{info.lookingFor}</td>
                    </tr>
                    <tr>
                        <td>Interested In:</td>
                        <td>{info.interestedIn}</td>
                    </tr>
                    <tr>
                        <td>Relationship Status:</td>
                        <td>{info.relationship}</td>
                    </tr>
                    <tr>
                        <td>Political Views:</td>
                        <td>{info.politicalView}</td>
                    </tr>
                    <tr>
                        <td>Interests:</td>
                        <td>{info.interests}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

// Component State
function infoState(state) {
    return {
        me: state.me
    }
}

export default connect(infoState, null)(Info)