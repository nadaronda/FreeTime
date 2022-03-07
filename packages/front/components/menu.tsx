import React from 'react'
import Link from 'next/link'

const Menu = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/objetivo">Objetivos</Link>
      <ol><Link href="/crearObjetivo">Crear Objetivo</Link></ol>
    </li>
    <li>
      <Link href="/escalon">Escalon</Link>
    </li>
    <li>
      <Link href="/categoria">Categorias</Link>
    </li>
    <li>
      <Link href="/logIn">Log in</Link>
    </li>
  </ul>
)

export default Menu
