// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

const authenticate = async (username, password) => {
    return await axios.post(routeApi, query({
        operation: 'authenticate',
        variables: {username, password},
        fields: ['user {id, email, username}', 'token']
    }))
}

const setProfilePicture = async (userId, entryId) => {
    return await axios.post(routeApi, mutation({
        operation: 'setAccountProfilePicture',
        variables: { userMediaGalleryEntryId: entryId, userId },
        fields: ['id']
    }))
}

export default {
    authenticate,
    setProfilePicture
}