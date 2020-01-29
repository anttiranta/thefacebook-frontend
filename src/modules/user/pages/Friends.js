// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

// App Imports
import SidePanel from '../../common/component/SidePanel'
import List from '../component/friends/List'
import SearchForm from '../component/search/SearchForm'

const Friends = () => {
    return (
        <div id="content">
            {/* SEO */}
            <Helmet>
                <title>Friends - Thefacebook</title>
            </Helmet>

            {/* Side panel */}
            <SidePanel />

            {/* Main container */}
            <div id="terms_box">
                <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>Friends</div><br />
                <SearchForm />
                <List />
            </div>
        </div>
    )
}

export default Friends;