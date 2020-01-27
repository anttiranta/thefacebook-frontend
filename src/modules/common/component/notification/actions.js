// App Imports
import {
  TYPE_ERROR, 
  TYPE_NOTICE,
  TYPE_SUCCESS
} from './Notification'

// Actions Types
export const SET_MESSAGE = 'NOTIFICATION/SET_MESSAGE'

// Actions
export const setError = (message) => {
    return setMessage(message, TYPE_ERROR)
}

export const setNotice = (message) => {
    return setMessage(message, TYPE_NOTICE)
}

export const setSuccess = (message) => {
    return setMessage(message, TYPE_SUCCESS)
}

export const setMessage = (message, msgType) => {
    const timeout = 3;

    return dispatch => {
      dispatch({
        type: SET_MESSAGE,
        data: {
            message: message,
            type: msgType
        }
      })
  
      // Hide message
      setTimeout(() => {
        dispatch({
          type: SET_MESSAGE,
          data: {
            message: null,
          }
        })
      }, timeout * 1000);
    }
}