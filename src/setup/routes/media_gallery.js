// App Imports
import MediaGallery from '../../modules/media_gallery/pages/MediaGalleryEntry'

// User routes
export default {
    mediaGalleryEntry: {
        path: (id = ':id') => (`/photos/photo_id/${id}`),
        component: MediaGallery,
        auth: true
    }
}