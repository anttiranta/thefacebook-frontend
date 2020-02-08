// Imports
import axios from 'axios'
import { mutation, query } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

const createNew = async (creatorId, receiverId) => {
    return await axios.post(routeApi, mutation({
        operation: 'createFriendRequest',
        variables: { creator: creatorId, receiver: receiverId },
        fields: ['id']
    }))
}

const getPendingList = async (variables = {}) => {
    return await axios.post(routeApi, query({
        operation: 'getPendingFriendRequests',
        variables: variables,
        fields: ['id', 'creator {id, name, email, friends {id}}', 'receiver {id, name, email, friends {id}}', 'createdAt']
    }))
}

export default {
    createNew,
    getPendingList
}