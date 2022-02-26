import { FastifyPluginAsync } from 'fastify'
import { mainRouter } from './routers/mainRouter'
// cors
export const mainApp: FastifyPluginAsync = async (app) => {
  app.register(mainRouter)
}
console.log('hola funcionoo ')
