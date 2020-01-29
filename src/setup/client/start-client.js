// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

// App Imports
import App from './App'
import store from '../store'
import { setUser, loginSetUserLocalStorage } from '../../modules/user/actions/me'

// User Authentication
const token = window.localStorage.getItem('token')
if (token && token !== 'undefined' && token !== '') {
  const user = JSON.parse(window.localStorage.getItem('user'))
  
  if (user) {
    store.dispatch(setUser(user, token))
    loginSetUserLocalStorage(token, user)
  }
}

// Client App
const render = () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
      document.getElementById('root')
    )
}

export default function () {
  render()
  store.subscribe(render)
}