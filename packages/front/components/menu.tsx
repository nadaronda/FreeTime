import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Head from 'next/head'

export const Menu = () => (
<>
  <Head>

   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
   <link rel="stylesheet" href="..." />
   <title>Escalera Mágica</title>

  </Head>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Escalera Mágica</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="http://localhost:3000/api/auth/objetivos"> Objetivos </a>
              </li>
              <li className="nav-item">
               <a className="nav-link active" aria-current="page" href="/crearObjetivo"> Crear Objetivos </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="/escalon"> Crear Escalones </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="/escalon">Crear Categorias </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

  </>
)

export default Menu
