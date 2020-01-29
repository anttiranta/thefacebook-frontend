// App Imports
import {
    SET_PARAMS,
} from '../actions/search'

// Initial State
const initialState = {
    searchFor: null,
    searchWord: null
}

// State
const searchFormParams = (state = initialState, action) => {
    switch (action.type) {
        case SET_PARAMS:
            return {
                ...state,
                searchFor: action.data.searchFor,
                searchWord: action.data.searchWord,
            }
        default:
            return state
    }
}

export default searchFormParams