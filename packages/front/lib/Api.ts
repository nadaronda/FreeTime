// add la conexion de axios con mi api y front ref w15d1
import axios from 'axios'

const apiBaseURL = 'http://localhost:3000'

const api = axios.create({ baseURL: apiBaseURL })

export const getObjetivos = async () => {
  const res = await api.get('/objetivo')
  return res.data
}

export const addObjectivos = async (data) => {
  const res = await api.post('/objetivo', data)
  return res.data
}

export const deleteObjetivos = async (objetivoId) => {
  const res = await api.get(`/objetivos/${objetivoId}/delete`)
  return res.data
}
