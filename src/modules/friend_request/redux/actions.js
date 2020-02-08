// App Imports
import friendRequestsApi from '../api/friendRequests'
import frManagementApi from '../api/friendRequestManagement'
import PrintableError from '../../../errors/PrintableError'

// Actions Types
export const FRIEND_REQUESTS_GET_LIST_BY_USER_REQUEST = 'FRIEND_REQUESTS/GET_LIST_BY_USER_REQUEST'
export const FRIEND_REQUESTS_GET_LIST_BY_USER_RESPONSE = 'FRIEND_REQUESTS/GET_LIST_BY_USER_RESPONSE'
export const FRIEND_REQUESTS_GET_LIST_BY_USER_FAILURE = 'FRIEND_REQUESTS/GET_LIST_BY_USER_FAILURE'

// Actions

// Get list of friend requests by receiver
export function getListByReceiver(receiverId, isLoading = true) {
  return getListByUser(receiverId, function (userId) {
    return friendRequestsApi.getPendingList({receiver: userId}); 
  }, isLoading)
}

// Get list of friend requests by creator
export function getListByCreator(creatorId, isLoading = true) {
  return getListByUser(creatorId, function (userId) {
    return friendRequestsApi.getPendingList({creator: userId}); 
  }, isLoading)
}

// Get list of friend requests by user
function getListByUser(userId, callback, isLoading = true) {
  return dispatch => {
    dispatch({
      type: FRIEND_REQUESTS_GET_LIST_BY_USER_REQUEST,
      error: null,
      isLoading
    })

    return callback(userId)
      .then(response => {
        let data = response.data.data

        if (response.status === 200 && data.getPendingFriendRequests 
            && data.getPendingFriendRequests.length >= 0) {
          dispatch({
            type: FRIEND_REQUESTS_GET_LIST_BY_USER_RESPONSE,
            error: null,
            isLoading: false,
            list: data.getPendingFriendRequests
          })
        } else {
          throw new PrintableError('Some error occurred. Please try again.')
        }
      })
      .catch(exception => {
        dispatch({
          type: FRIEND_REQUESTS_GET_LIST_BY_USER_FAILURE,
          error: exception instanceof PrintableError
          ? exception.message
          : 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}

// Create friend request
export function create(creatorId, receiverId) {
  return dispatch => {
    return friendRequestsApi.createNew(creatorId, receiverId)
  }
}

// Accept friend request
export function accept(creatorId, receiverId) {
  return dispatch => {
    return frManagementApi.accept(creatorId, receiverId) 
  }
}

// Decline friend request
export function decline(creatorId, receiverId) {
  return dispatch => {
    return frManagementApi.decline(creatorId, receiverId) 
  }
}