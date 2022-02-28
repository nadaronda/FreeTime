import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { Escalon } from '../models/pasoIntermedio.model'
type Myrequest = FastifyRequest<{
    Body: {escalon: string, descripcion: string, timeImport: Number};
    Params: {id: string}
}>
export const escalonGeneralRouter: FastifyPluginAsync = async (app) => {
  // Get all escalones
  app.get('/escalon', async () => {
    const pasos = await Escalon.find().lean()
    return pasos
  })
  // Create a new escalon
  app.post('/escalon', async (request: Myrequest, reply: FastifyReply) => {
    const { escalon, descripcion, timeImport } = request.body
    const newPaso = new Escalon({ escalon, descripcion, timeImport })
    await newPaso.save()
    return newPaso
  })
  // borrar escalon
  app.delete('/escalon/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params
    await Escalon.findByIdAndDelete(id)
    return { status: 'delete' }
  })
}
