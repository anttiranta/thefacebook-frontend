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
  'concentation',
  'lookingFor',
  'interestedIn',
  'relationship',
  'politicalView',
  'interests',
  'phone',
  'school',
  'updatedAt'
]

// Functions

const getList = async (queryOptions = {}) => {
  const defaultOptions = {
    operation: 'users',
    fields: defaultUserFields
  }

  return await axios.post(routeApi, query(
    !isEmpty(queryOptions) ? Object.assign(defaultOptions, queryOptions) : defaultOptions
  ))
}

const getById = async (id, modelsToJoin = {}) => {
  return await axios.post(routeApi, query({
    operation: 'getUserById',
    variables: { id },
    fields: addModelFieldsToFields(modelsToJoin, defaultUserFields)
  }))
}

const getByUsername = async (username, modelsToJoin = {}) => {
  return await axios.post(routeApi, query({
    operation: 'getUserByUsername',
    variables: { username },
    fields: addModelFieldsToFields(modelsToJoin, defaultUserFields)
  }))
}

const createNew = async (userObject) => {
  return await axios.post(routeApi, mutation({
    operation: 'createAccount',
    variables: userObject,
    fields: ['id']
  }))
}

const update = async (userObject) => {
  if (!userObject.id || userObject.id <= 0) {
    throw new Error('Identifier is missing.')
  }

  return await axios.post(routeApi, mutation({
    operation: 'updateAccount',
    variables: userObject,
    fields: ['id']
  }))
}

const deleteById = async (id) => {
  return await axios.post(routeApi, mutation({
    operation: 'removeAccount',
    variables: { id },
    fields: ['id']
  }))
}

const addModelFieldsToFields = (modelsToJoin, fields) => {
  if (!isEmpty(modelsToJoin)) {

    modelsToJoin.forEach(model => {
        if (model === 'profilePicture') {
          fields.push('profilePicture {id, file}')
        }
        if (model === 'friends') {
          fields.push('friends {id, name}')
        }
    });
  }

  return fields
}

export default {
  getList,
  getById,
  getByUsername,
  createNew,
  update,
  deleteById
}