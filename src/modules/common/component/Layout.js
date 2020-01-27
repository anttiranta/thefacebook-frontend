// Imports
import React from 'react'
//import PropTypes from 'prop-types'

// Styles
import '../../../resources/css/style.css'

// App Imports
import Notification from './notification/Notification'
import Header from './header/Header'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <div id="main-container">
            <Header />
            <Notification />
            
            {/* Page Content */}
            <>
                {props.children}
            </>
            <Footer />
        </div>
    )
}

export default Layout