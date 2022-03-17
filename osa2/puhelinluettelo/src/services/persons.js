import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const add = (person) => {
  return axios
    .post(baseUrl, person)
    .then(response => response.data)
}

const remove = (personId) => {
  return axios
    .delete(`${baseUrl}/${personId}`)
}

const update = (personId, newContent) => {
  return axios
    .put(`${baseUrl}/${personId}`, newContent)
    .then(response => response.data)
}
export default {getAll, add, remove, update}