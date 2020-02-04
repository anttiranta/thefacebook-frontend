// Imports
import axios from 'axios'
import { query } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

const authenticate = async (username, password) => {
    return await axios.post(routeApi, query({
        operation: 'authenticate',
        variables: {username, password},
        fields: ['user {id, name, email, username}', 'token']
    }))
}

export default {
    authenticate
}