import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
// import Link from 'next/link'
const Fo = styled.div`
margin:50px;
border: 1px purple solid;
text-align: right;
color: black;
background-color: lightgray;
`
const Bod = styled.div`
background-color: lightblue;
`

const Footer = () => (
  <>
  <Bod>
    <Head>
      <link rel="stylesheet" href="..." />
    </Head>
    <Fo>
      "Ayer fue un SUEÑO, hoy es ESFUERZO, mañana seran LOGROS"
    </Fo>

  </Bod>
  </>
)

export default Footer
