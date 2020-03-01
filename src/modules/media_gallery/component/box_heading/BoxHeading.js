// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import EditLink from './EditLink'
import RemoveLink from './RemoveLink'
import GalleryLink from './GalleryLink'
import { apostrophize } from '../../../../utils/stringUtils'

// Component
const BoxHeading = (props) => {
    const { user, entry } = props
    const me = props.me.details

    return (
        <>
            <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                    <tbody>
                        <tr>
                            <td>{`${apostrophize(user.name)} Photos`}</td>
                            <td id="fb_link" style={{ textAlign: 'right' }}>
                                {
                                    user.id === me.id
                                        ? <>
                                            <EditLink entry={entry} />
                                            <RemoveLink entry={entry} me={me} />
                                        </>
                                        : ''
                                }
                                <GalleryLink user={entry.user} />
                            </td>
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
    entry: PropTypes.object.isRequired
}

// Component State
function boxHeadingState(state) {
    return {
        me: state.me
    }
}

export default connect(boxHeadingState, null)(BoxHeading)