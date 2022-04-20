import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { DescriptionOutlined } from '@mui/icons-material'
import { addObjetivo, getObjetivos } from '../../../lib/Api'
import { api_escalones } from '../../../lib/fercher'
import React from 'react'
import styled from 'styled-components'
import { blue } from '@mui/material/colors'
export default withApiAuthRequired(async (req, res) => {
  const { accessToken } = await getAccessToken(req, res)

  const res_api = await api_escalones.get('/', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  // res.status(200).json(res_api.data)
  console.log(res_api.data[0])
  console.log(res_api.data[0])
  const respuesta = (res.json(res_api.data)) // para ver el objetivo en si

  return respuesta
}
)
