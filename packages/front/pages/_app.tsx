import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group' // para poder importar estilos de next reac
import PrimaryLayout from '../components/layouts/PrimaryLayout'
import { UserProvider } from '@auth0/nextjs-auth0'
import { Provider } from 'react-redux'
import { store } from '../lib/redux/store'
// me traigo las props que trae por defecto la app next, todo bajo el marco de una funcion.
// como componentes traremos component, pageprops y router.
const MyApp = ({ Component, pageProps, router, initialUser, hello }) => {
  console.log('router', router.asPath)
  console.log('hola', hello)
  console.log('component', Component)
  console.log('pageProps', pageProps)
  return (
  // engloba la app bajo redux
  <Provider store={store}>
      {/* //toda la app esta englobada por userProvider que lo da auth0 */}
    <UserProvider user={initialUser}>
    <PrimaryLayout>
      {/* camibar estilos, puesto estos para no olvidar . lo que hacen es ir desapareciendo */}
      <style jsx>
        {`
          main {
            position: relative;
            overflow: hidden;
          }
          .page {
            transition: 0.5s all;
            grid-row-start: 1;
            grid-column-start: 1;
          }
          .exit-active {
            transform: translateX(-100%);
          }
        `}
      </style>

      {/* estilos para el menu */}
      <main>
        <TransitionGroup className="todo-list" style={{ display: 'grid' }}>
          <CSSTransition
            key={router.asPath}
            timeout={1500}
            transitionname="app-page"
          >
            <div className="page">
              <Component {...pageProps} />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </PrimaryLayout>
    </UserProvider>
  </Provider>
  )
}

export default MyApp
/* const MyApp = ({ Component, pageProps, router }) => (
  <>
    <header>
      <Menu />
    </header>
    <main>
      <Component {...pageProps} />
    </main>
  </>
)
export default MyApp */
