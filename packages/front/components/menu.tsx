import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Menu = () => (
<>
  <Head>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="..." />
    <title>Escalera Mágica</title>

  </Head>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" href="/">Escalera Mágica</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

              <Link href="/objetivo">Objetivos</Link>
              <Link href="/crearObjetivo">Crear Objetivos</Link>
              <Link href="/escalon">Escalon</Link>
              <Link href="/categoria">Categorias</Link>
         </div>
        </div>
    </div>
    </nav>

  </>
)

export default Menu
