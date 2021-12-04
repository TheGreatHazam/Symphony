import axios from 'axios'

const api = axios.create({
    baseURL: 'http://3.143.218.228:8000/api',
})

export const insertSymphony = payload => api.post(`/symphony`, payload)
export const getAllSymphonies = () => api.get(`/symphonies`)
export const updateSymphonyById = (id, payload) => api.put(`/symphony/${id}`, payload)
export const deleteSymphonyById = id => api.delete(`/symphony/${id}`)
export const getSymphonyById = id => api.get(`/symphony/${id}`)

const apis = {
    insertSymphony,
    getAllSymphonies,
    updateSymphonyById,
    deleteSymphonyById,
    getSymphonyById,
}

export default apis

