// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/routes'

// Functions
const getAll = async () => {
    return await axios.get(routeApi + 'V1/users')
}

const getById = async (id) => {
    return await axios.get(`${routeApi + 'V1/users'}/${id}`)
}

const getByUsername = async (username) => {
    return await axios.get(`${routeApi + 'V1/users'}/getByUsername/${username}`) 
}

const createNew = async (userObject) => {
    return await axios.post(routeApi + 'V1/users', {
        user: userObject.user,
        password: (userObject.password !== undefined && userObject.password !== '') 
            ? userObject.password 
            : null
    })
}

const update = async (id, userObject) => {
  return await axios.put(`${routeApi + 'V1/users'}/${id}`, userObject)
}

const deleteById = async (id) => {
    return await axios.delete(`${routeApi + 'V1/users'}/${id}`)
}

// TODO: find by params

export default {
  getAll, 
  getById,
  getByUsername,
  createNew, 
  update,
  deleteById
}