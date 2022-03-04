import React from 'react'
import CategoriaForm from '../components/form/categoriaForm'

const CategoriaPage = () => (
  <div>
    <h2>La escalera mágica</h2>
    <p>Categorias</p>
    <p>
        En esta pantalla observaras los micro objetivos que tienes subdivididos en
        las categorias definidas por el usuario,
        por lo que podras añadir categorias, eliminarlas.
        Ideas de categorías como economicas, familiares, burocraticas, etc...
        La idea de esta sección es que cuando tu definas un escalon de tu escalera le
        asignes una categoría, para que al solicitar la categoria de interes, aparezcan
        aquellos escalones que la contengan. Para poder saber con facilidad aquellos
        objetivos que comparten ciertas caracteristicas.
    </p>
    <CategoriaForm/>
  </div>
)

export default CategoriaPage
