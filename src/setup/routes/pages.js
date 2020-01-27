// App Imports
import Welcome from '../../modules/pages/Welcome'
import AboutUs from '../../modules/pages/AboutUs'
import Faq from '../../modules/pages/Faq'
import Contact from '../../modules/pages/Contact'
import Privacy from '../../modules/pages/Privacy'
import Terms from '../../modules/pages/Terms'
import Reset from '../../modules/pages/Reset'
import Construction from '../../modules/pages/Construction'
import NotFound from '../../modules/common/component/NotFound'

// Routes for publicly available pages
export default {
  home: {
    path: '/',
    component: Welcome,
    exact: true
  },

  aboutUs: {
    path: '/about-us',
    component: AboutUs
  },

  faq: {
    path: '/faq',
    component: Faq
  },

  contact: {
    path: '/contact',
    component: Contact
  },

  terms: {
    path: '/terms',
    component: Terms
  },

  privacy: {
    path: '/privacy',
    component: Privacy
  },

  reset: {
    path: '/reset',
    component: Reset
  },

  construction: {
    path: '/construction',
    component: Construction
  },

  notFound: {
    path: '/404',
    component: NotFound
  }
}