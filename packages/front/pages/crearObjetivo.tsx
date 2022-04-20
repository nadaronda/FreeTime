import React from 'react'
import Footerdos from '../components/footerdos'
import NewObjetivo from '../components/form/nuevoObjetivo'
const crearObjetivo = () => (

    <>
      <h1>Añade un nuevo objetivo</h1>
      < NewObjetivo/>
      <p>
        Añade sus pequeños escalones para alcanzar
         su objetivo mayor
      </p>
      <a className="nav-link active" aria-current="page" type="button" href="http://localhost:3000/api/auth/objetivos"> Ver objetivos creados </a>
      <Footerdos/>

    </>

)
export default crearObjetivo
