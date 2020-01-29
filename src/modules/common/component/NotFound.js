// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

// Image Imports
import notFoundImage from '../../../resources/images/thumbs-up-plaster.jpg'

const NotFound = () => {
    return (
        <div id="construction_box">
            {/* SEO */}
            < Helmet >
                <title>Page not found - Thefacebook</title>
            </Helmet >

            <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>Page not found!</div>
            <h1 style={{ textAlign: 'center' }}>[ Sorry, this page isn't available ]</h1>
            <p style={{ margin: 'auto', width: '90%', textAlign: 'center' }}>
                The link you followed may be broken, or the page may have been removed.
            </p>
            <p style={{ textAlign: 'center' }}>
                <img src={notFoundImage} alt="thumbs-up" />
            </p>
        </div>
    )
}

export default NotFound;