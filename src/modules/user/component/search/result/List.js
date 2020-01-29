// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import SearchResultItem from './Item'
import ResultCountBox from '../../../../common/component/search/ResultCountBox'
import Loading from '../../../../common/component/Loading'
import { renderIf } from '../../../../../utils/elementUtils'
import { defaultIfUndefined } from '../../../../../utils/objectUtils'

const List = (props) => {

    let { isLoading, list } = props.users
    let searchWord = defaultIfUndefined(props.searchParams.searchWord)

    const renderResultsCountText = (amount) => {
        return 'Displaying all ' + amount + ' matches.'
    }

    return (
        <div>
            {
                isLoading
                    ? <Loading />
                    : renderIf(searchWord, () => (
                        <div id="terms_boxes">
                            <div style={{ backgroundColor: "#4C70A0", color: "white", paddingLeft: '2px' }}>
                                Search results {searchWord ? <>- results for search <span style={{ textDecoration: 'underline' }}>{searchWord}</span></> : ''}
                            </div>
                            <ResultCountBox>{renderResultsCountText(list.length)}</ResultCountBox>
                            {
                                list.length > 0
                                    ? list.map((user, i, list) => (
                                        <div key={user.id}>
                                            <SearchResultItem user={user} />
                                            {renderIf(list.length - 1 !== i, () => (
                                                <hr />
                                            ))}
                                        </div>
                                    ))
                                    : <p>No users to show.</p>
                            }
                            <ResultCountBox>{renderResultsCountText(list.length)}</ResultCountBox>
                        </div>
                    ))
            }
        </div>
    )
}

// Component Properties
List.propTypes = {
    users: PropTypes.object.isRequired,
    searchParams: PropTypes.object
}

// Component State
function listState(state) {
    return {
        users: state.users,
        searchParams: state.searchFormParams
    }
}

export default connect(listState, null)(List)