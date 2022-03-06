import mongoose, { Document, Schema } from 'mongoose'
import { Escalon } from './pasoIntermedio.model'
export interface icategoria extends Document {
    name: String,
    // add seed categorias predefinidas
}

const schema = new Schema({
  name: { type: String, require: true }
}, {
  // timestamps: true
})
export const getEscalon = async (idCategoria: string) => {
  const escalones = await Escalon.find({ categoria: idCategoria }).lean()
  return escalones
}
export const Categoria = mongoose.model<icategoria>('categoria', schema)
