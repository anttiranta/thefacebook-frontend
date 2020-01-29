// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const friendS_GET_LIST_REQUEST = 'friendS/GET_LIST_REQUEST'
export const friendS_GET_LIST_RESPONSE = 'friendS/GET_LIST_RESPONSE'
export const friendS_GET_LIST_FAILURE = 'friendS/GET_LIST_FAILURE'
export const friendS_GET_LIST_BY_USER_REQUEST = 'friendS/GET_LIST_BY_USER_REQUEST'
export const friendS_GET_LIST_BY_USER_RESPONSE = 'friendS/GET_LIST_BY_USER_RESPONSE'
export const friendS_GET_LIST_BY_USER_FAILURE = 'friendS/GET_LIST_BY_USER_FAILURE'
export const friendS_GET_REQUEST = 'friendS/GET_REQUEST'
export const friendS_GET_RESPONSE = 'friendS/GET_RESPONSE'
export const friendS_GET_FAILURE = 'friendS/GET_FAILURE'

// Actions

// Create friend request
export function create(variables) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'friendCreate',
      variables,
      fields: ['id']
    }))
  }
}

