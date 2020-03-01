// App Imports
import MediaGalleryEntry from '../../modules/media_gallery/pages/MediaGalleryEntry'
import EditForm from '../../modules/media_gallery/pages/EditForm'

// User routes
export default {
    mediaGalleryEntry: {
        path: (id = ':id') => (`/photos/photo/${id}`),
        component: MediaGalleryEntry,
        auth: true
    },

    createEntry: {
        path: '/photos/create',
        component: EditForm,
        auth: true
    },

    editEntry: {
        path: (id = ':id') => (`/photos/edit/${ id }`),
        component: EditForm,
        auth: true
    }
}