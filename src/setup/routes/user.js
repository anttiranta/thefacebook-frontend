// App Imports
import Login from '../../modules/user/pages/Login'
import Register from '../../modules/user/pages/Register'
import Profile from '../../modules/user/pages/Profile'
import Search from '../../modules/user/pages/Search'

// User routes
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  register: {
    path: '/user/register',
    component: Register
  },

  profile: {
    path: (account = ':account') => (`/user/profile/${ account }`),
    component: Profile,
    auth: true
  },

  editProfile: {
    path: (account = ':account') => (`/user/profile/${ account }/edit/1`),
    component: Profile,
    auth: true
  },

  search: {
    path: '/user/search',
    component: Search
  },
}