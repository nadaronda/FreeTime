import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
const Fo = styled.div`
margin:50px;
border: 1px purple solid;
text-align: center;
color: black;
background-color: lightgray;
`
const Bod = styled.div`
background-color: lightblue;
`
export const Footerdos = () => (
<>
<>
  <Bod>
    <Head>
      <link rel="stylesheet" href="..." />
    </Head>
    <Fo>
      Piensa en objetivos generales. Con la creacción de los escalones podras desglosar
       el objetivo en pequeños objetivos, faciles de alcanzar.
    </Fo>
  </Bod>
  </>
</>
)

export default Footerdos
