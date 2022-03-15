import * as React from 'react'
import Box from '@mui/material/Box'
import { green } from '@mui/material/colors'
import Icon from '@mui/material/Icon'

export const Añadir = function Icons () {
  return (

      <Box
        sx={{
          '& > :not(style)': {
            m: 3
          }
        }}
      >

        <Icon color="primary">add_circle</Icon>
        {/*
        <Icon sx={{ color: green[500] }}>add_circle</Icon>
        <Icon >add_circle</Icon>
        */}

      </Box>

  )
}
export default Añadir
