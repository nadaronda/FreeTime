import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
// import Link from 'next/link'
const Fo = styled.div`
margin:50px;
border: 1px purple solid;
text-align: center;
color: black;
background-color: lightgray;
`
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
const Footer = () => (
  <>
   <Head>
      <link rel="stylesheet" href="..." />
  </Head>
  <Fo>
    Ayer fue un SUEÑO, hoy es ESFUERZO, mañana seran LOGROS
  </Fo>
  <Button>hola prueba</Button>
  </>
)

export default Footer
