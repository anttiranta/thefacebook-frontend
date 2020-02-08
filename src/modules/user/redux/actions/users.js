// App Imports
import usersApi from '../../api/users'
import userFriendsApi from '../../api/userFriends'
import PrintableError from '../../../../errors/PrintableError'

// Actions Types
export const USERS_GET_LIST_REQUEST = 'USERS/GET_LIST_REQUEST'
export const USERS_GET_LIST_RESPONSE = 'USERS/GET_LIST_RESPONSE'
export const USERS_GET_LIST_FAILURE = 'USERS/GET_LIST_FAILURE'
export const USERS_GET_LIST_RESET = 'USERS/GET_LIST_RESET'
export const USERS_GET_REQUEST = 'USERS/GET_REQUEST'
export const USERS_GET_RESPONSE = 'USERS/GET_RESPONSE'
export const USERS_GET_FAILURE = 'USERS/GET_FAILURE'
export const USERS_GET_FRIEND_LIST_REQUEST = 'USERS/GET_FRIEND_LIST_REQUEST'
export const USERS_GET_FRIEND_LIST_RESPONSE = 'USERS/GET_FRIEND_LIST_RESPONSE'
export const USERS_GET_FRIEND_LIST_FAILURE = 'USERS/GET_FRIEND_LIST_FAILURE'

// Actions

// Get list of users
export function getList(variables = {}, isLoading = true, forceRefresh = false) {
  return async dispatch => {
    dispatch({
      type: USERS_GET_LIST_REQUEST,
      isLoading
    })

    try {
      const response = await usersApi.getList({
        'variables': variables,
      });

      let errors = response.data.errors
      let data = response.data.data

      if (response.status === 200) {
        if (errors && errors.length > 0) {
          throw new PrintableError(errors[0].message)
        }

        dispatch({
          type: USERS_GET_LIST_RESPONSE,
          list: data.users
        })
      }
    } catch (exception) {
      dispatch({
        type: USERS_GET_LIST_FAILURE,
        error: exception instanceof PrintableError
          ? exception.message
          : 'Some error occurred. Please try again.'
      })
    }
  }
}

// Get single user by id
export function getById(id, isLoading = true) {
  return getSingleUser(id, function (id) {
    return usersApi.getById(id);
  }, isLoading)
}

// Get single user by username
export function getByUsername(username, isLoading = true) {
  return getSingleUser(username, function (username) {
    return usersApi.getByUsername(username);
  }, isLoading)
}

function getSingleUser(id, callback, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: USERS_GET_REQUEST,
      isLoading
    })

    try {
      const response = await callback(id);

      let errors = response.data.errors
      let data = response.data.data

      if (response.status === 200) {
        if (errors && errors.length > 0) {
          throw new PrintableError(errors[0].message)
        }
        dispatch({
          type: USERS_GET_RESPONSE,
          user: data.getUserByUsername
        })
      }
    } catch (exception) {
      dispatch({
        type: USERS_GET_FAILURE,
        error: exception instanceof PrintableError
          ? exception.message
          : 'Some error occurred. Please try again.'
      })
    }
  }
}

// Get list of friends by user
export function getFriendList(userId, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: USERS_GET_FRIEND_LIST_REQUEST,
      error: null,
      isLoading
    })

    try {
      const response = await userFriendsApi.getList(userId);

      let data = response.data.data

      if (response.status === 200) {
        dispatch({
          type: USERS_GET_FRIEND_LIST_RESPONSE,
          error: null,
          isLoading: false,
          list: data.userFriends,
          userId
        })
      } else {
        throw new PrintableError('Some error occurred. Please try again.')
      }
    } catch (exception) {
      dispatch({
        type: USERS_GET_FRIEND_LIST_FAILURE,
        error: exception instanceof PrintableError
          ? exception.message
          : 'Some error occurred. Please try again.',
        isLoading: false
      })
    }
  }
}

// Update user
export function update(user) {
  return async dispatch => {
    try {
      const response = await usersApi.update(user)

      let errors = response.data.errors
      if (errors && errors.length > 0) {
        throw new PrintableError(errors[0].message)
      } else if (response.status === 200) {
        return response.data.data.updateAccount
      } else {
        throw new PrintableError('Some error occurred. Please try again.')
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

      let errors = response.data.errors
      if (errors && errors.length > 0) {
        throw new PrintableError(errors[0].message)
      } else if (response.status === 200) {
        return
      } else {
        throw new PrintableError('Some error occurred. Please try again.')
      }
    } catch (exception) {
      throw exception
    }
  }
}