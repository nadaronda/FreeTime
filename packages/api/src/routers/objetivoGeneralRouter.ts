// crud
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { ObjetivoGeneral } from '../models/objetivoGeneral.model'

type Myrequest = FastifyRequest<{
    Body: {objetivo: string, descripcion: string, img: string};
    Params: {id: string}
}>
export const objetivoGeneralRouter: FastifyPluginAsync = async (app) => {
  // Get all objetives
  app.get('/', async () => {
    const objetivos = await ObjetivoGeneral.find().lean()
    return objetivos
  })
  // Create a new objetivo
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { objetivo, descripcion } = request.body
    const oobjetivo = new ObjetivoGeneral({ objetivo, descripcion })
    await oobjetivo.save()
    return oobjetivo
  })
  // borrar objetivo
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params
    await ObjetivoGeneral.findByIdAndDelete(id)
    return { status: 'delete' }
  })
}
