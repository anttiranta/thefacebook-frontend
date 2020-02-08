// Imports
import axios from 'axios'
import { mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

const accept = async (creatorId, receiverId) => {
    return await axios.post(routeApi, mutation({
        operation: 'acceptFriendRequest',
        variables: {creator: creatorId, receiver: receiverId},
        fields: ['id', 'status']
    }))
}

const decline = async (creatorId, receiverId) => {
    return await axios.post(routeApi, mutation({ 
        operation: 'declineFriendRequest',
        variables: {creator: creatorId, receiver: receiverId},
        fields: ['id', 'status']
    }))
}

export default {
    accept,
    decline
}