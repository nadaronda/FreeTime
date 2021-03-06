// crud
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { ObjetivoGeneral } from '../models/objetivoGeneral.model'

type Myrequest = FastifyRequest<{
    Body: {user_Id: string, objetivo: string, descripcion: string, limitTime: Date, /* img: string */};
    Params: {id: string}
}>
export const objetivoGeneralRouter: FastifyPluginAsync = async (app) => {
  // Get all objetives
  app.get('/', async () => {
    console.log('hola desde la api')
    const objetivos = await ObjetivoGeneral.find().lean()
    return objetivos
  })
  // Create a new objetivo
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { user_Id, objetivo, descripcion, limitTime } = request.body
    const newObjetivo = new ObjetivoGeneral({ user_Id, objetivo, descripcion, limitTime })
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
// mirar img
