// Imports
import axios from 'axios'

// App Imports
import { routeApi } from '../../../setup/routes'

const getAll = async () => {
    const response = await axios.get(getBaseUrl())
    return response.data
}

const getById = async (id) => {
    const response = await axios.get(`${getBaseUrl()}/${id}`)
    return response.data
}

const getByUsername = async (username) => {
    const response = await axios.get(`${getBaseUrl()}/getByUsername/${username}`) 
    return response.data
}

const createNew = async (userObject) => {
    const response = await axios.post(getBaseUrl(), {
        user: userObject.user,
        password: (userObject.password !== undefined && userObject.password !== '') 
            ? userObject.password 
            : null
    })
    return response.data
}

const update = async (id, userObject) => {
  const response = await axios.put(`${getBaseUrl()}/${id}`, userObject)
  return response.data
}

const deleteById = async (id) => {
    const response = await axios.delete(`${getBaseUrl()}/${id}`)
    return response.data
}

// TODO: find by name

const getBaseUrl = () => {  
    // TODO: move this elsewhere to prevent duplication
    return routeApi + 'V1/users'
}

export default {
  getAll, 
  getById,
  getByUsername,
  createNew, 
  update,
  deleteById
}