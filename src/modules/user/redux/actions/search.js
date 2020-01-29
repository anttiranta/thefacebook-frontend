// Actions Types
export const SET_PARAMS = 'SEARCH_FORM/SET_PARAMS'

// Actions
export const setSearchFormParams = (params) => {
    return dispatch => {
        dispatch({
            type: SET_PARAMS,
            data: params
        })
    }
}