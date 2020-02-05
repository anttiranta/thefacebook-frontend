// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'
import { isEmpty } from '../../../utils/objectUtils'

const defaultUserFields = [
  'id', 
  'name', 
  'email', 
  'username', 
  'gender', 
  'memberSince', 
  'status', 
  'year', 
  'concentration', 
  'lookingFor', 
  'interestedIn', 
  'relationship', 
  'politicalView', 
  'interests', 
  'profilePicture'
]

// Functions
const getList = async (variables = {}) => {
  const defaultOptions = {
    operation: 'users',
    fields: defaultUserFields
  }

  return await axios.post(routeApi, query(
    !isEmpty(variables) ? { ...defaultOptions, 'variables': variables } : defaultOptions
  ))
}

const getById = async (id) => {
  return await axios.post(routeApi, query({
    operation: 'getUserById',
    variables: { id },
    fields: defaultUserFields
  }))
}

const getByUsername = async (username) => {
  return await axios.post(routeApi, query({
    operation: 'getUserByUsername',
    variables: { username },
    fields: defaultUserFields
  }))
}

const createNew = async (userObject) => {
  return await axios.post(routeApi, mutation({
    operation: 'createAccount',
    variables: userObject,
    fields: ['id', 'name', 'email']
  }))
}

const update = async (id, userObject) => {
  // TODO!
  return await axios.put(`${routeApi}/${id}`, userObject)
}

const deleteById = async (id) => {
   // TODO!
  return await axios.delete(`${routeApi}/${id}`)
}

// TODO: get friends

export default {
  getList,
  getById,
  getByUsername,
  createNew,
  update,
  deleteById
}