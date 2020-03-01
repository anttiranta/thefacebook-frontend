// App Imports
import PrintableError from '../../../errors/PrintableError'
import userMediaGalleryManagement from '../api/userMediaGalleryManagement'

// Actions Types
export const MEDIA_GALLERY_ENTRIES_GET_LIST_REQUEST = 'MEDIA_GALLERY_ENTRIES/GET_LIST_REQUEST'
export const MEDIA_GALLERY_ENTRIES_GET_LIST_RESPONSE = 'MEDIA_GALLERY_ENTRIES/GET_LIST_RESPONSE'
export const MEDIA_GALLERY_ENTRIES_GET_LIST_FAILURE = 'MEDIA_GALLERY_ENTRIES/GET_LIST_FAILURE'
export const MEDIA_GALLERY_ENTRIES_GET_REQUEST = 'MEDIA_GALLERY_ENTRIES/GET_REQUEST'
export const MEDIA_GALLERY_ENTRIES_GET_RESPONSE = 'MEDIA_GALLERY_ENTRIES/GET_RESPONSE'
export const MEDIA_GALLERY_ENTRIES_GET_FAILURE = 'MEDIA_GALLERY_ENTRIES/GET_FAILURE'

// Actions

// Get list of media gallery entries
export function getMediaGalleryEntryListByUser(userId, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: MEDIA_GALLERY_ENTRIES_GET_LIST_REQUEST,
      error: null,
      isLoading
    })

    try {
      const response = await userMediaGalleryManagement.getListByUser(userId);

      let data = response.data.data

      if (response.status === 200) {
        dispatch({
          type: MEDIA_GALLERY_ENTRIES_GET_LIST_RESPONSE,
          error: null,
          isLoading: false,
          list: data.userGalleryEntries,
          userId
        })
      } else {
        throw new PrintableError('Some error occurred. Please try again.')
      }
    } catch (exception) {
      dispatch({
        type: MEDIA_GALLERY_ENTRIES_GET_LIST_FAILURE,
        error: exception instanceof PrintableError
          ? exception.message
          : 'Some error occurred. Please try again.',
        isLoading: false
      })
    }
  }
}


// Get single media gallery entry by id
export function getById(id, isLoading = true) {
  return async dispatch => {
    dispatch({
      type: MEDIA_GALLERY_ENTRIES_GET_REQUEST,
      isLoading
    })

    try {
      const response = await userMediaGalleryManagement.getById(id);

      let errors = response.data.errors
      let data = response.data.data

      if (response.status === 200) {
        if (errors && errors.length > 0) {
          throw new PrintableError(errors[0].message)
        }
        dispatch({
          type: MEDIA_GALLERY_ENTRIES_GET_RESPONSE,
          mediaGalleryEntry: data.getUserGalleryEntry
        })
      }
    } catch (exception) {
      dispatch({
        type: MEDIA_GALLERY_ENTRIES_GET_FAILURE,
        error: exception instanceof PrintableError
          ? exception.message
          : 'Some error occurred. Please try again.'
      })
    }
  }
}

// Create media gallery entry
export function create(mediaGalleryEntry) {
  if (!mediaGalleryEntry.id) {
    return async dispatch => {
      const response = await userMediaGalleryManagement.createNew(mediaGalleryEntry);

      let errors = response.data.errors

      if (response.status === 200) {
        if (errors && errors.length > 0) {
          throw new PrintableError(errors[0].message)
        }
        return response.data.data.createUserGalleryEntry
      } else {
        throw new PrintableError('Some error occurred. Please try again.')
      }
    }
  } else {
    throw new Error(
      "Media gallery entry already has an ID. Update should be called instead of create."
    )
  }
}

// Update media gallery entry
export function update(mediaGalleryEntry) {
  if (mediaGalleryEntry.id) {
    return async dispatch => {
      const response = await userMediaGalleryManagement.update(mediaGalleryEntry);

      let errors = response.data.errors

      if (response.status === 200) {
        if (errors && errors.length > 0) {
          throw new PrintableError(errors[0].message)
        }
        return response.data.data.updateUserGalleryEntry
      } else {
        throw new PrintableError('Some error occurred. Please try again.')
      }
    }
  } else {
    throw new Error(
      "Media gallery entry does not have an ID. Create should be called instead of update."
    )
  }
}

// Remove media gallery entry
export function remove(entryId, userId) {
  return async dispatch => {
    const response = await userMediaGalleryManagement.remove(entryId, userId);

    let errors = response.data.errors

    if (response.status === 200) {
      if (errors && errors.length > 0) {
        throw new PrintableError(errors[0].message)
      }
      return response.data.data.removeUserGalleryEntry
    } else {
      throw new PrintableError('Some error occurred. Please try again.')
    }
  }
}