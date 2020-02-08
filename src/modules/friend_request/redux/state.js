// App Imports
import {
    FRIEND_REQUESTS_GET_LIST_BY_USER_REQUEST,
    FRIEND_REQUESTS_GET_LIST_BY_USER_RESPONSE,
    FRIEND_REQUESTS_GET_LIST_BY_USER_FAILURE,
} from './actions'

// Friend request list by user

// Initial State
const friendRequestsByUserInitialState = {
    isLoading: false,
    error: null,
    list: []
}

// State
export const friendRequestsByUser = (state = friendRequestsByUserInitialState, action) => {
    switch (action.type) {
        case FRIEND_REQUESTS_GET_LIST_BY_USER_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: null
            }
        case FRIEND_REQUESTS_GET_LIST_BY_USER_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error || true,
                list: action.list
            }
        case FRIEND_REQUESTS_GET_LIST_BY_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error || true
            }
        default:
            return state
    }
}