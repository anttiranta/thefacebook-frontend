// Imports
import React from 'react'

// Component
const LinkContainer = (props) => {
    const { children, ...others } = props

    return (
        <div id="links_box">
            <table {...others}>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default LinkContainer;