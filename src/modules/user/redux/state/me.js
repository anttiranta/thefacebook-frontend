// App Imports
import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  SET_USER,
  LOGOUT,
} from '../actions/me'

// Initial State
export const userInitialState = {
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
export default (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: action.user !== "" && action.user !== undefined,
        details: action.user,
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case LOGIN_RESPONSE:
      return {
        ...state,
        isLoading: false
      }
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }
    default:
      return state
  }
}