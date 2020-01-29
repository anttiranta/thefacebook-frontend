// App Imports
import usersApi from './../api/users'

// Actions Types
export const USERS_GET_LIST_REQUEST = 'USERS/GET_LIST_REQUEST'
export const USERS_GET_LIST_RESPONSE = 'USERS/GET_LIST_RESPONSE'
export const USERS_GET_LIST_FAILURE = 'USERS/GET_LIST_FAILURE'
export const USERS_GET_LIST_RESET = 'USERS/GET_LIST_RESET'
export const USER_GET_REQUEST = 'USERS/GET_REQUEST'
export const USER_GET_RESPONSE = 'USERS/GET_RESPONSE'
export const USER_GET_FAILURE = 'USERS/GET_FAILURE'

// Actions

// Get list of users
export function getList(isLoading = true, forceRefresh = false) {
  return async dispatch => {
    dispatch({
      type: USERS_GET_LIST_REQUEST,
      isLoading
    })

    try {
      const response = await usersApi.getAll();

      if (response.status === 200) {
        dispatch({
          type: USERS_GET_LIST_RESPONSE,
          list: response.data.users
        })
      } else {
        dispatch({
          type: USERS_GET_LIST_FAILURE,
          error: response.data.error ? response.data.error : true
        })
      }
    } catch (exception) {
      dispatch({
        type: USERS_GET_LIST_FAILURE,
        error: exception.message
      })
    }
  }
}

// Get single user by id
export function getById(id, isLoading = true, idType = 'id') {
  return async dispatch => {
    dispatch({
      type: USER_GET_REQUEST,
      isLoading
    })

    try {
      let response = {}
      if (idType === 'username') {
        // TODO: there has to be a better way to do this...
        response = await usersApi.getByUsername(id);
      } else {
        response = await usersApi.getById(id);
      }

      if (response.status === 200) {
        if (response.data.error) {
          dispatch({
            type: USER_GET_FAILURE,
            error: response.data.error.message
          })
        } else {
          dispatch({
            type: USER_GET_RESPONSE,
            user: response.data.user
          })
        }
      } else {
        dispatch({
          type: USER_GET_FAILURE,
          error: 'Some error occurred. Please try again.'
        })
      }
    } catch (exception) {
      dispatch({
        type: USER_GET_FAILURE,
        error: exception.message
      })
    }
  }
}

// Get single user by username
export function getByUsername(username, isLoading = true) {
  return getById(username, isLoading, 'username')
}

// Update user
export function update(user) {
  return async dispatch => {
    try {
      const response = await usersApi.update(user.id, user);

      if (response.data.error) {
        throw response.data.error
      } else if (response.status === 200) {
        return response.data
      }
    } catch (exception) {
      throw exception
    }
  }
}

// Remove user by Id
export function deleteById(userId) {
  return async dispatch => {
    try {
      const response = await usersApi.deleteById(userId);

      if (response.data.error) {
        throw response.data.error
      } else if (response.status === 200) {
        return
      }
    } catch (exception) {
      throw exception
    }
  }
}

// TODO: get friends