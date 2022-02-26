import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { Escalon } from '../models/pasoIntermedio.model'
type Myrequest = FastifyRequest<{
    Body: {escalon: string, descripcion: string, img: string};
    Params: {id: string}
}>
export const escalonGeneralRouter: FastifyPluginAsync = async (app) => {
  // Get all escalones
  app.get('/', async () => {
    const pasos = await Escalon.find().lean()
    return pasos
  })
  // Create a new escalon
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { escalon, descripcion } = request.body
    const paso = new Escalon({ escalon, descripcion })
    await paso.save()
    return paso
  })
  // borrar escalon
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params
    await Escalon.findByIdAndDelete(id)
    return { status: 'delete' }
  })
}