import { FastifyPluginAsync } from 'fastify'

export const mainRouter: FastifyPluginAsync = async (app) => {
  app.get('/', async () => {
    return { hello: 'World' }
  })
}
