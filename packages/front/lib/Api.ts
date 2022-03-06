import axios from 'axios'

const apiBaseURL = 'http://localhost:3001'
const api = axios.create({ baseURL: apiBaseURL })

export const getObjetivo = async () => {
  const res = await api.get('/objetivo')
  return res.data
}
export const addObjetivo = async (data) => {
  console.log(`📝, la data del objetivo añadido es ${data}`)
  const res = await api.post('/objetivo', data)
  return res.data
}
export const deleteObjetivo = async (ObjetivoId) => {
  const res = await api.get(`/objetivo/${ObjetivoId}/delete`)
  return res.data
}
// rutas de conexion de la api con el front falta add escalon y categorias
