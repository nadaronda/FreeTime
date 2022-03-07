import { FastifyPluginAsync } from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifyBlipp from 'fastify-blipp'
import { conectDB } from './lib/db'
import { categoriaRouter } from './routers/categoriaRouter'
import { objetivoGeneralRouter } from './routers/objetivoGeneralRouter'
import { escalonGeneralRouter } from './routers/pasoIntermedioRouter'
export const mainApp: FastifyPluginAsync = async (app) => {
  conectDB()
  await app.register(fastifyBlipp)
  app.register(fastifyCors, {
    origin: (origin, cb) => {
      if (/localhost/.test(origin)) {
        //  Request from localhost will pass
        cb(null, true)
        return
      }
      // Generate an error on other origins, disabling access
      cb(null, false)
    }
  })

  app.register(objetivoGeneralRouter, { prefix: '/objetivo' })
  app.register(escalonGeneralRouter, { prefix: '/escalon' })
  app.register(categoriaRouter, { prefix: '/categoria' })
}
