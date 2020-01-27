// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/routes'

const authenticate = async (username, password) => {
    const response = await axios.post(`${routeApi + 'V1/users'}/authenticate`, {username, password})
    return response.data
}

export default {
    authenticate
}