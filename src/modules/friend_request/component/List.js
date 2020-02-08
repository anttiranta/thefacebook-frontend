// Imports
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// App Imports
import Item from './Item'
import ResultCountBox from '../../common/component/search/ResultCountBox'
import Loading from '../../common/component/Loading'
import { renderIf } from '../../../utils/elementUtils'
import { getListByReceiver } from '../redux/actions'

const List = (props) => {

    const prevProps = useRef(false)

    const renderResultsCountText = (amount) => {
        return amount + ' pending friend requests.'
    }

    useEffect(() => {
        if (!prevProps.current || prevProps.current.user.id !== props.user.id) {
            if (props.user.id && !props.friendRequests.isLoading) {
                props.getListByReceiver(props.user.id)
            }
        }
        prevProps.current = props
    }, [props])

    let { isLoading, list } = props.friendRequests
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
                                ? list.map((friendReq, i, list) => (
                                    <div key={friendReq.id}>
                                        <Item friendRequest={friendReq} />
                                        {renderIf(list.length - 1 !== i, () => (
                                            <hr />
                                        ))}
                                    </div>
                                ))
                                : <p>No pending friend requests.</p>
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
    friendRequests: PropTypes.object.isRequired,
    getListByReceiver: PropTypes.func.isRequired
}

// Component State
function listState(state) {
    return {
        friendRequests: state.friendRequestsByUser
    }
}

export default connect(listState, { getListByReceiver })(List)