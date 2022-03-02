import React from 'react'
import Link from 'next/link'

const Menu = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/objetivo">Objetivos</Link>
    </li>
    <li>
      <Link href="/escalon">Escalon</Link>
    </li>
    <li>
      <Link href="/categoria">Categorias</Link>
    </li>
    <li>
      <Link href="/">Log in</Link>
    </li>
  </ul>
)

export default Menu
