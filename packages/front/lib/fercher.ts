import axios from 'axios'

export const api_objetivos = axios.create({ baseURL: 'http://127.0.0.1:10/objetivo' })
export const frontend_objetivos = axios.create()
export const fetcher = async (resource, init) => {
  const res = await frontend_objetivos.get(resource)
  return res.data
}
export const api_escalones = axios.create({ baseURL: 'http://127.0.0.1:10/escalon' })
export const frontend_escalones = axios.create()
export const fetche = async (resource, init) => {
  const res = await frontend_escalones.get(resource)
  return res.data
}
