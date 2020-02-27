// Imports
import React from 'react'
import { connect } from 'react-redux'

// App Imports
import pagesRoutes from '../../../setup/routes/pages'
import userRoutes from '../../../setup/routes/user'
import LinkContainer from '../../common/component/links_box/LinkContainer'
import LinkItem from '../../common/component/links_box/LinkItem'
import { renderIf } from '../../../utils/elementUtils'

const Links = (props) => {
    const user = props.user.details
    const me = props.me.details

    return (
        <LinkContainer style={{ width: '282px', marginTop: '12px', textAlign: 'center' }}>
            <LinkItem to={userRoutes.mediaGallery.path(user.username)}>View More Photos</LinkItem>
            <LinkItem to={userRoutes.friends.path(user.username)}>View All Friends</LinkItem>
            {renderIf(user.id !== me.id, () => (
                <LinkItem to={pagesRoutes.construction.path}>Send a Message</LinkItem>
            ))}
            {renderIf(user.id !== me.id, () => (
                <LinkItem to={pagesRoutes.construction.path}>Add as a Friend</LinkItem>
            ))}
        </LinkContainer>
    )
}

// Component State
function linksState(state) {
    return {
        me: state.me
    }
}

export default connect(linksState, null)(Links)