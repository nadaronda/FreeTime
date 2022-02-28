import { FastifyPluginAsync } from 'fastify'
import { conectDB } from './lib/db'
import { categoriaRouter } from './routers/CategoriaRouter'
import { mainRouter } from './routers/mainRouter'
import { objetivoGeneralRouter } from './routers/objetivoGeneralRouter'
import { escalonGeneralRouter } from './routers/pasoIntermedioRouter'

// cors
export const mainApp: FastifyPluginAsync = async (app) => {
  app.register(mainRouter)
  app.register(objetivoGeneralRouter)
  app.register(escalonGeneralRouter)
  app.register(categoriaRouter)
  await conectDB()
}
console.log('hola funcionoo ')
