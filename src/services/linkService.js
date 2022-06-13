import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/url'

const getAll = () => {
    return axios.get(`${baseUrl}/getAll`)
}

const create = newObject => {
    console.log('create called', newObject);
    return axios.post(`${baseUrl}/shorten`, newObject)
}

// const update = (id, newObject) => {
//     return axios.put(`${baseUrl}/${id}`, newObject)
// }

const remove = (code) => {
    return axios.delete(`${baseUrl}/${code}`)
}
const linkservice = {
    getAll,
    create,
    remove
}

export default linkservice