import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { api_objetivos } from '../../../lib/fetcher'

export default withApiAuthRequired(async (req, res) => {
  const { accessToken } = await getAccessToken(req, res)

  const res_api = await api_objetivos.get('/', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  res.status(200).json(res_api.data)
})
// http://localhost:3000/api/auth/objetivos
