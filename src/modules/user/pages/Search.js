// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

// App Imports
import SidePanel from '../../common/component/SidePanel'
import SearchResults from '../component/search/result/List'
import SearchForm from '../component/search/SearchForm'

const Search = () => {
    const renderResultsCountText = (amount) => {
        return 'Displaying all ' + amount + ' matches.'
    }

    return (
        <div id="content">
            {/* SEO */}
            <Helmet>
                <title>Search People - Thefacebook</title>
            </Helmet>

            {/* Side panel */}
            <SidePanel />

            {/* Main container */}
            <div id="terms_box">
                <div style={{ backgroundColor: '#4C70A0', color: 'white' }}>Search People</div><br />
                <SearchForm />
                <SearchResults renderResultsCountText={renderResultsCountText} />
            </div>
        </div>
    )
}

export default Search;