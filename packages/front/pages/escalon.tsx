import React from 'react'
import NewEscalon from '../components/form/escalonForm'

const CreaEscalon = () => (
  <div>
    <h2>La escalera mágica</h2>
    <p>Escalones</p>
    <p>
    En esta pantalla observaras tus micro objetivos llamados escalones,
    podras añadir escalones y eliminarlos.
    Para que esta herramienta te sea más util y más sencilla,
    el micro objetivo, escalón debe ser lo más simple posible.
    </p>
    <NewEscalon/>
  {/* Aqui intentar que aparezcan los escalones de interes */}
  </div>
)

export default CreaEscalon
