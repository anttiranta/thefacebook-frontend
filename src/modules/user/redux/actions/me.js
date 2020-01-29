// Imports
import axios from 'axios'

// App Imports
import userManagementApi from '../api/userManagement'
import usersApi from '../api/users'

// Actions Types
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE'
export const SET_USER = 'AUTH/SET_USER'
export const LOGOUT = 'AUTH/LOGOUT'

// Set a user after login or using localStorage token
export function setUser(user, token) {
   if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  } 
  return { type: SET_USER, user }
}

// Login user
export function login(username, password, isLoading = true) {
    return async dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
            isLoading
        })

        try {
            const response = await userManagementApi.authenticate(username, password);

            if (response.data.error) {
                dispatch({type: LOGIN_RESPONSE})
                throw response.data.error
            } else if (response.data.userLogin.token !== '') {
                const token = response.data.userLogin.token
                const user = response.data.userLogin.user
                
                dispatch(setUser(user, token))

                loginSetUserLocalStorage(token, user)
                
                dispatch({type: LOGIN_RESPONSE})
            }
        } catch (exception) {
            dispatch({type: LOGIN_RESPONSE})
            throw exception
        }
    }  
}

// Log out user
export function logout() {
    return dispatch => {
      logoutUnsetUserLocalStorage()
  
      dispatch({
        type: LOGOUT
      })
    }
}

// Register a user
export function register(userDetails) {
  return async dispatch => {
    
    try {
        const response = await usersApi.createNew(userDetails);

        if (response.data.error) {
            throw response.data.error
        }
        return response.data
    } catch (exception) {
        throw exception
    }
  }
}

// Set user token and info in localStorage
export function loginSetUserLocalStorage(token, user) {
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(user))
}
  
// Unset user token and info in localStorage
export function logoutUnsetUserLocalStorage() {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
}