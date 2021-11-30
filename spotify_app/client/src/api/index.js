import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertSpotify = payload => api.post(`/spotify`, payload)
export const getAllSpotifies = () => api.get(`/spotifies`)
export const updateSpotifyById = (id, payload) => api.put(`/spotify/${id}`, payload)
export const deleteSpotifyById = id => api.delete(`/spotify/${id}`)
export const getSpotifyById = id => api.get(`/spotify/${id}`)

const apis = {
    insertSpotify,
    getAllSpotifies,
    updateSpotifyById,
    deleteSpotifyById,
    getSpotifyById,
}

export default apis
