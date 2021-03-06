import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'

import { api_objetivos } from '../../../lib/fercher'

export default withApiAuthRequired(async (req, res) => {
  const { accessToken } = await getAccessToken(req, res)

  const res_api = await api_objetivos.get('/', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  // res.status(200).json(res_api.data)
  // console.log(res_api.data[0]._id)
  // console.log(res_api.data[0].objetivo)
  const respuesta = (res.json(res_api.data)) // para ver el objetivo en si

  return respuesta
}

)
// http://localhost:3000/api/auth/objetivos
