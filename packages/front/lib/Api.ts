import axios from 'axios'

const apiBaseURL = 'http://127.0.0.1:10'
const api = axios.create({ baseURL: apiBaseURL })

export const getObjetivo = async () => {
  const res = await api.get('/objetivo')
  return res.data
}
// hacer ruta getObjetivo
export const addObjetivo = async (data) => {
  console.log(`📝, la data del objetivo añadido es ${data}`)
  const res = await api.post('/objetivo', data)
  return res.data
}
// ruta addObjetivo hecha
export const deleteObjetivo = async (Id) => {
  const res = await api.get(`/objetivo/${Id}/delete`)
  return res.data
}
// hacer ruta deleteObjetivo
// rutas escalones

export const getEscalon = async () => {
  const res = await api.get('/escalon')
  return res.data
}
export const addEscalon = async (data) => {
  console.log(`📝, la data del escalon añadido es ${data}`)
  const res = await api.post('/escalon', data)
  return res.data
}
// ruta creada pero no se ve la categoria

export const deleteEscalon = async (Id) => {
  const res = await api.get(`/escalon/${Id}/delete`)
  return res.data
}
// rutas categorias

export const getCategoria = async () => {
  const res = await api.get('/categoria')
  return res.data
}
export const addCategoria = async (data) => {
  console.log(`📝, la data del categoria añadido es ${data}`)
  const res = await api.post('/categoria', data)
  return res.data
}
export const deleteCategoria = async (Id) => {
  const res = await api.get(`/categoria/${Id}/delete`)
  return res.data
}
// rutas de conexion de la api con el front falta add escalon y categorias
