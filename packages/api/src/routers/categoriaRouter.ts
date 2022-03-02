// crud
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { Categoria } from '../models/categoria.model'

type Myrequest = FastifyRequest<{
    Body: {categoria: String};
    Params: {id: string}
}>
export const categoriaRouter: FastifyPluginAsync = async (app) => {
  // Get all objetives
  app.get('/', async () => {
    const categorias = await Categoria.find().lean()
    return categorias
  })
  // Create a new objetivo
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { categoria } = request.body
    const newCategoria = new Categoria({ categoria })
    await newCategoria.save()
    return newCategoria
  })
  // borrar objetivo
  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params
    await Categoria.findByIdAndDelete(id)
    return { status: 'delete' }
  })
}
