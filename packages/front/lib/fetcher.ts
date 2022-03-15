import axios from 'axios'

export const apiBaseURL = 'http://127.0.0.1:10'
export const api_objetivos = axios.create({ baseURL: apiBaseURL })
export const frontend_objetivos = axios.create()
export const fetcher = async (resource, init) => {
  const res = await frontend_objetivos.get(resource)
  return res.data
}
