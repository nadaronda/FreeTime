import axios from 'axios'
const objetivos_api = axios.create({ baseURL: 'http://127.0.0.1:10/objetivo' })

const fercher = async (resource, init) => {
  const res = await objetivos_api.get(resource)
  return res.data
}
export default fercher
