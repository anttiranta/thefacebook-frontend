// App Imports
import {
  USERS_GET_LIST_REQUEST,
  USERS_GET_LIST_RESPONSE,
  USERS_GET_LIST_FAILURE,
  USERS_GET_LIST_RESET,
  USER_GET_REQUEST,
  USER_GET_RESPONSE,
  USER_GET_FAILURE
} from '../actions/users'
import { defaultIfUndefined } from '../../../utils/objectUtils'

// User list

// Initial State
const usersInitialState = {
  isLoading: false,
  list: []
}

// State
export const users = (state = usersInitialState, action) => {
  switch (action.type) {
    case USERS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: defaultIfUndefined(action.isLoading, true),
        error: null
      }
    case USERS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        list: action.list,
        error: defaultIfUndefined(action.error, null)
      }
    case USERS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: defaultIfUndefined(action.error, true)
      }
    case USERS_GET_LIST_RESET:
      return Object.assign({}, usersInitialState)
    default:
      return state
  }
}

// Single user

// Initial State
const userInitialState = {
  isLoading: false,
  error: null,
  details: {}
}

// State
export const user = (state = userInitialState, action) => {
  switch (action.type) {
    case USER_GET_REQUEST:
      return {
        ...state,
        isLoading: defaultIfUndefined(action.isLoading, true),
        error: null,
      }
    case USER_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: defaultIfUndefined(action.error, null),
        details: action.user,
      }
    case USER_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: defaultIfUndefined(action.error, true)
      }
    default:
      return state
  }
}