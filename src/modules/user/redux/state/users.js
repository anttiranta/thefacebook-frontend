// App Imports
import {
  USERS_GET_LIST_REQUEST,
  USERS_GET_LIST_RESPONSE,
  USERS_GET_LIST_FAILURE,
  USERS_GET_LIST_RESET,
  USERS_GET_REQUEST,
  USERS_GET_RESPONSE,
  USERS_GET_FAILURE,
  USERS_GET_FRIEND_LIST_REQUEST,
  USERS_GET_FRIEND_LIST_RESPONSE,
  USERS_GET_FRIEND_LIST_FAILURE
} from '../actions/users'
import { defaultIfUndefined } from '../../../../utils/objectUtils'

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
    case USERS_GET_REQUEST:
      return {
        ...state,
        isLoading: defaultIfUndefined(action.isLoading, true),
        error: null,
      }
    case USERS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: defaultIfUndefined(action.error, null),
        details: action.user,
      }
    case USERS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: defaultIfUndefined(action.error, true)
      }
    default:
      return state
  }
}

// User friend list

// Initial State
const usersFriendInitialState = {
  isLoading: false,
  error: null,
  list: [],
  userId: 0
}

// State
export const usersFriend = (state = usersFriendInitialState, action) => {
  switch (action.type) {
    case USERS_GET_FRIEND_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }
    case USERS_GET_FRIEND_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list,
        userId: action.userId
      }
    case USERS_GET_FRIEND_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}