import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { Escalon } from '../models/pasoIntermedio.model'
type Myrequest = FastifyRequest<{
    Body: {escalon: string, descripcion: string, timeImport: Date};
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
    const { escalon, descripcion, timeImport } = request.body
    const newEscalon = new Escalon({ escalon, descripcion, timeImport })
    await newEscalon.save()
    return newEscalon
  })
  // borrar escalon
  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params
    await Escalon.findByIdAndDelete(id)
    return { status: 'delete' }
  })
}
