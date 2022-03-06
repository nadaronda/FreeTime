import mongoose, { Document, Schema } from 'mongoose'
import { Escalon } from './pasoIntermedio.model'
// import { Categoria } from './categoria.model'

export interface iObjetivoGeneral extends Document {
    user_Id: String,
    objetivo: String,
    descripcion: String,
    limitTime: Date, // cambiarlo por day limit time es un dato donde te das un tiempo determinado para terminar el objetivo
    img: String,
}

const schema = new Schema({
  user_Id: { type: String, require: true },
  objetivo: { type: String, require: true },
  descripcion: { type: String, require: true },
  limitTime: { type: Date, require: true },
  img: String
  // true es que si o si se debe solicitar ese campo, false no es necesario
}, {
  timestamps: true // esto hace que cada vez que s guarde data la informacion tenga fecha y hora
})

export const getEscalon = async (idObjetivoGeneral: string) => {
  const escalones = await Escalon.find({ objetivo: idObjetivoGeneral }).lean()
  return escalones
}
/*
export const getCategoria = async (idCategoria: string) => {
  const categorias = await Categoria.find({ categoria: idCategoria }).lean()
  return categorias
}
*/
export const ObjetivoGeneral = mongoose.model<iObjetivoGeneral>('Objetivo', schema)
// falta user ID, esto es para relacionar los datos a un unico usuario:
// user_id: { type: String, required: true }, // Id del usuario en auth0 que realiza la reserva
