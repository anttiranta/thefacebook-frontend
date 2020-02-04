// Imports
import axios from 'axios'
import { mutation } from 'gql-query-builder'

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
    return await axios.get({routeApi}) // TODO!
}

const createNew = async (userObject) => {
    return await axios.post(routeApi, mutation({
        operation: 'createAccount',
        variables: userObject,
        fields: ['id', 'name', 'email']
      }))
}

const update = async (id, userObject) => {
  return await axios.put(`${routeApi}/${id}`, userObject)
}

const deleteById = async (id) => {
    return await axios.delete(`${routeApi}/${id}`)
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