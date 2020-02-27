// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

const defaultFields = [
    'id',
    'label',
    'position',
    'file',
    'mediaType',
    'disabled',
    'content {mimeType, name}',
]

// Functions

const getListByUser = async (userId, excluded = false) => {
    return await axios.post(routeApi, query({
        operation: 'userGalleryEntries',
        variables: { userId, disabled: excluded },
        fields: defaultFields
    }))
}

const getById = async (id, getUserInfoFlag = true) => {
    return await axios.post(routeApi, query({
        operation: 'getUserGalleryEntry',
        variables: { id },
        fields: getUserInfoFlag ? defaultFields.concat('user {id, name}') : getUserInfoFlag
    }))
}

const createNew = async (entryObject) => {
    return await axios.post(routeApi, mutation({
        operation: 'createUserGalleryEntry',
        variables: entryObject,
        fields: ['id']
    }))
}

const update = async (entryObject) => {
    if (!entryObject.id || entryObject.id <= 0) {
        throw new Error('Identifier is missing.')
    }

    return await axios.post(routeApi, mutation({
        operation: 'updateUserGalleryEntry',
        variables: entryObject,
        fields: defaultFields
    }))
}

const remove = async (id, userId) => {
    return await axios.post(routeApi, mutation({
        operation: 'removeUserGalleryEntry',
        variables: { id, userId },
        fields: ['id']
    }))
}

export default {
    getListByUser,
    getById,
    createNew,
    update,
    remove
}