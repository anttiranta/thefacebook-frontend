// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const ClickableLink = (props) => {
    const { children, onPress } = props
    const linkStyle = props.linkStyle || {}

    return (
        <span onClick={() => onPress()} style={linkStyle} className={'clickable_link'}>
            {children}
        </span>
    )
}

// Component Properties
ClickableLink.propTypes = {
    onPress: PropTypes.func.isRequired,
    linkStyle: PropTypes.object,
}

export default ClickableLink