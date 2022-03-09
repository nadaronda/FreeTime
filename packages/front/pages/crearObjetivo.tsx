import React from 'react'
import NewObjetivo from '../components/form/nuevoObjetivo'
import NewEscalon from '../components/form/escalonForm'
const crearObjetivo = () => (

    <>
      <h1>Añade un nuevo objetivo</h1>
      < NewObjetivo/>
      <p>Añade sus pequeños escalones para alcanzar
         su objetivo mayor
      </p>
      < NewEscalon/>
    </>

)
export default crearObjetivo
