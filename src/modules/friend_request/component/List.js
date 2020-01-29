// Imports
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import SearchResultItem from './Item'
import ResultCountBox from '../../common/component/search/ResultCountBox'
import Loading from '../../common/component/Loading'
import { renderIf } from '../../../utils/elementUtils'
import { getFriendList } from '../../user/redux/actions/users'
import { apostrophize } from '../../../utils/stringUtils'

const List = (props) => {

    const prevProps = useRef(false)

    const renderResultsCountText = (amount) => {
        return amount + ' friends.'
    }

    useEffect(() => {
        if (!prevProps.current || prevProps.current.user.id !== props.user.id) {
            if (props.user.id && !props.usersFriend.isLoading) {
                props.getFriendList(props.user.id)
            }
        }
        prevProps.current = props
    }, [props])

    let { isLoading, list } = props.usersFriend
    let user = props.user

    if (!prevProps.current) {
        isLoading = true
    }

    return (
        <div>
            {
                isLoading
                    ? <Loading />
                    : <div id="terms_boxes">
                        <div style={{ backgroundColor: "#4C70A0", color: "white", paddingLeft: '2px' }}>Friend requests</div>
                        <ResultCountBox>{renderResultsCountText(list.length)}</ResultCountBox>
                        {
                            list.length > 0
                                ? list.map((friend, i, list) => (
                                    <div key={friend.id}>
                                        <SearchResultItem user={friend} />
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
    user: PropTypes.object.isRequired,
    usersFriend: PropTypes.object.isRequired,
    getFriendList: PropTypes.func.isRequired
}

// Component State
function listState(state) {
    return {
        usersFriend: state.usersFriend
    }
}

export default connect(listState, { getFriendList })(List)