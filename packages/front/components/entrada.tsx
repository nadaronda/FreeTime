import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
const Diver = styled.div`

  margin:30px;
  border: 20px;
  text-align: center;
  color: black;
  background-color: lightgray;
  &:hover {
    background-color: #bdbbbb;
  }
`
export function Entrada () {
  return (
  <>
        <Head>
            <link rel="stylesheet" href="..." />
        </Head>
        <Diver>
            <h2>La escalera mágica</h2>
            <p>La escalera mágica es una aplicación basada en objetivos de todo tipo.</p>
            <p>
                Consiste en tener objetivos que se subdividen en micro objetivos, sencillos de alcanzar
                que se denominan escalones, estos escalones a su vez tienen una característica que se llama
                categoría, estas categorías pueden ser de todo tipo, economicas, burocráticas, familiares, etc...
                A aparte, de tener una fecha límite que se establecera el propio usuario como meta alcanzar.
            </p>
            <p>Logueate para poder acceder</p>

        </Diver>
  </>
  )
}

export default Entrada
