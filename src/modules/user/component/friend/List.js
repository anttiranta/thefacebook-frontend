// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import SearchResultItem from '../search/result/Item'
import ResultCountBox from '../../../common/component/search/ResultCountBox'
import Loading from '../../../common/component/Loading'
import { renderIf } from '../../../../utils/elementUtils'

const List = (props) => {

    let { isLoading, list } = props.users
    const renderResultsCountText = (amount) => {
        return amount + ' friends.'
    }

    return (
        <div>
            {
                isLoading
                    ? <Loading />
                    : <div id="terms_boxes">
                        <div style={{ backgroundColor: "#4C70A0", color: "white", paddingLeft: '2px' }}>Friends</div>
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
                                : <p>No friends to show.</p>
                        }
                        <ResultCountBox>{renderResultsCountText(list.length)}</ResultCountBox>
                    </div>
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