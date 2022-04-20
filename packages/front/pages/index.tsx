import React from 'react'

import Entradados from '../components/entradados'
import Footer from '../components/footer'
const styleObject = {
  border: '3px solid blue',
  padding: 10,
  marginTop: 10,
  background: '#EAFAF1',

  letterspacing: 30

}
const IndexPage = () => (
  <>
  <div style={ styleObject}>

            <Entradados/>

        </div>
        <Footer/>
  </>
)

export default IndexPage
