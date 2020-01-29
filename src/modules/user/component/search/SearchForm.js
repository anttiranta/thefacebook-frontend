// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import { setError } from '../../../common/component/notification/actions'
import { setSearchFormParams } from '../../redux/actions/search'
import { getList as getUserList } from '../../actions/users'
import { defaultIfUndefined } from '../../../../utils/objectUtils'

const SearchForm = (props) => {

    const searchForOptions = {
        "name": "Name",
        "username": "User ID",
        "email": "Email",
        "sex": "Sex",
        "looking_for": "Looking for",
        "interested_in": "Interested In",
        "political_views": "Political Views",
        "interests": "Interests",
    }

    const validateSearchParams = (params) => {
        if (!params.searchFor || !params.searchWord) {
            throw Error('You did not fill in all required fields.')
        }
        if (!Object.keys(searchForOptions).includes(params.searchFor)) {
            throw Error('Invalid search subject.')
        }
    }

    const handleStartSearch = (event) => {
        event.preventDefault()

        const searchFor = event.target.search_for.value
        const searchWord = event.target.search_word.value

        try {
            validateSearchParams({searchFor, searchWord})

            props.setSearchFormParams({searchFor, searchWord})

            props.getUserList()
        } catch (exception) {
            props.setError(exception.message) // TODO: better message printing
        }
    }

    const isLoading = defaultIfUndefined(props.users.isLoading, false)
    let { searchFor, searchWord } = props.searchParams

    return (
        <div id="terms_boxes">
            <div style={{ backgroundColor: "#4C70A0", color: "white", paddingLeft: '2px' }}>Search</div>

            <form onSubmit={handleStartSearch}>
                <table style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', width: '670px' }}>
                    <tbody>
                        <tr>
                            <td width="20%">
                                <select name="search_for">
                                    {
                                        Object.entries(searchForOptions).map((parts) => (
                                            <option key={parts[0]} value={parts[0]} selected={searchFor === parts[0]}>{parts[1]}</option>
                                        ))
                                    }
                                </select>
                            </td>
                            <td width="69%">
                                <input type="text" name="search_word" value={searchWord} />
                            </td>
                            <td width="11%" style={{ textAlign: 'center', paddingRight: '5px' }}>
                                <div id="fb_button">
                                    <input type="submit" name="search" value="Search" disabled={isLoading} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table><br />
            </form>
        </div>
    )
}

// Component Properties
SearchForm.propTypes = {
    users: PropTypes.object.isRequired,
    setError: PropTypes.func.isRequired,
    getUserList: PropTypes.func.isRequired,
    setSearchFormParams: PropTypes.func.isRequired
}

// Component state
function searchFormState(state) {
    return {
        users: state.users,
        searchParams: state.searchFormParams
    }
}

export default connect(searchFormState, { setError, getUserList, setSearchFormParams })(SearchForm)