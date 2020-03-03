// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import mediaGalleryRoutes from '../../../../setup/routes/media_gallery'
import { apostrophize } from '../../../../utils/stringUtils'

// Component
const BoxHeading = (props) => {
    const { user } = props
    const me = props.me.details

    return (
        <>
            <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tbody>
                        <tr>
                            <td>{`${apostrophize(user.name)} Photos`}</td>
                            {
                                user.id === me.id ?
                                    <>
                                        <td id="fb_link" style={{ textAlign: 'right' }}>
                                            <Link to={mediaGalleryRoutes.createEntry.path}> [ add new ] </Link>
                                        </td>
                                    </>
                                    : <td>&nbsp;</td>
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
        </>
    )
}

// Component Properties
BoxHeading.propTypes = {
    user: PropTypes.object.isRequired,
    me: PropTypes.object.isRequired,
}

// Component State
function boxHeadingState(state) {
    return {
        me: state.me
    }
}

export default connect(boxHeadingState, null)(BoxHeading)