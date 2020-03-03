// Imports
import axios from 'axios'
import { query } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

const getList = async (userId) => {
    return await axios.post(routeApi, query({
        operation: 'userFriends',
        variables: { id: userId },
        fields: ['id, name, status, relationship, username, profilePicture{id, file}'] 
    }))
}

export default {
    getList
}