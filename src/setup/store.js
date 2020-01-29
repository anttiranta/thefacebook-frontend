// Imports
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

// App imports
import me from '../modules/user/redux/state/me'
import * as user from '../modules/user/redux/state/users'
import notification from '../modules/common/component/notification/state'
import searchFormParams from '../modules/user/redux/state/search'

// App Reducer
const appReducer = combineReducers({
    me,
    ...user,
    searchFormParams,
    message: notification
})

// Root Reducer
export const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
      state = undefined
    }
    return appReducer(state, action)
}

// Store
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store