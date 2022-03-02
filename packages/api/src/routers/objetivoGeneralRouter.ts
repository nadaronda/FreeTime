// crud
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { ObjetivoGeneral } from '../models/objetivoGeneral.model'

type Myrequest = FastifyRequest<{
    Body: {userId: string, objetivo: string, descripcion: string, limitTime: Number, img: string};
    Params: {id: string}
}>
export const objetivoGeneralRouter: FastifyPluginAsync = async (app) => {
  // Get all objetives
  app.get('/', async () => {
    console.log('aqui')
    const objetivos = await ObjetivoGeneral.find().lean()
    return objetivos
  })
  // Create a new objetivo
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { userId, objetivo, descripcion, limitTime } = request.body
    const newObjetivo = new ObjetivoGeneral({ userId, objetivo, descripcion, limitTime })
    await newObjetivo.save()
    return newObjetivo
  })
  // borrar objetivo
  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params
    await ObjetivoGeneral.findByIdAndDelete(id)
    return { status: 'delete' }
  })
}
// buscar prefijo en fastify
