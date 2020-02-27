// App Imports
import { APP_URL_API, APP_URL } from '../config/env'
import pages from './pages'
import user from './user'
import mediaGallery from './media_gallery'

// Combined routes
export const routes = Object.assign(pages, user, mediaGallery)

// API Routes
export const routeApi = APP_URL_API

// Image
export const routeImage = APP_URL