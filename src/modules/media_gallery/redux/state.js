// App Imports
import {
    MEDIA_GALLERY_ENTRIES_GET_LIST_REQUEST,
    MEDIA_GALLERY_ENTRIES_GET_LIST_RESPONSE,
    MEDIA_GALLERY_ENTRIES_GET_LIST_FAILURE,
    MEDIA_GALLERY_ENTRIES_GET_REQUEST,
    MEDIA_GALLERY_ENTRIES_GET_RESPONSE,
    MEDIA_GALLERY_ENTRIES_GET_FAILURE,
} from './actions'

// Media gallery entry list

// Initial State
const mgesInitialState = {
    isLoading: false,
    error: null,
    list: [],
    userId: 0
}

// State
export const mediaGalleryEntries = (state = mgesInitialState, action) => {
    switch (action.type) {
        case MEDIA_GALLERY_ENTRIES_GET_LIST_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading || true,
                error: null
            }
        case MEDIA_GALLERY_ENTRIES_GET_LIST_RESPONSE:
            return {
                ...state,
                isLoading: false,
                list: action.list,
                error: action.error || null,
                userId: action.userId
            }
        case MEDIA_GALLERY_ENTRIES_GET_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error || true
            }
        default:
            return state
    }
}

// Single media gallery entry

// Initial State
const mgeState = {
    isLoading: false,
    error: null,
    details: {}
}

// State
export const mediaGalleryEntry = (state = mgeState, action) => {
    switch (action.type) {
        case MEDIA_GALLERY_ENTRIES_GET_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading || true,
                error: null,
            }
        case MEDIA_GALLERY_ENTRIES_GET_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error || null,
                details: action.mediaGalleryEntry,
            }
        case MEDIA_GALLERY_ENTRIES_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error || true
            }
        default:
            return state
    }
}
