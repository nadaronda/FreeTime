import fastify from 'fastify'
import { mainApp } from './app'
import { PORT } from './config'
const server = fastify({
  logger: {
    prettyPrint: true
  },
  disableRequestLogging: true
})

server.register(mainApp)
server.listen(PORT)// de aquí retito , "0.0.0,0"
