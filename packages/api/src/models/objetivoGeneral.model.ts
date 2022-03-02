import mongoose, { Document, Schema } from 'mongoose'
import { Escalon } from './pasoIntermedio.model'

export interface iObjetivoGeneral extends Document {
    userId: String,
    objetivo: String,
    descripcion: String,
    limitTime: Number, // limit time es un dato donde te das un tiempo determinado para terminar el objetivo
    img: String,
}

const schema = new Schema({
  userId: { type: String, require: true },
  objetivo: { type: String, require: true },
  descripcion: { type: String, require: false },
  limitTime: { type: Number, require: true },
  img: String
  // true es que si o si se debe solicitar ese campo, false no es necesario
}, {
  timestamps: true // esto hace que cada vez que s guarde data la informacion tenga fecha y hora
})

export const getEscalon = async (idObjetivoGeneral: string) => {
  const escalones = await Escalon.find({ objetivo: idObjetivoGeneral }).lean()
  return escalones
}

export const ObjetivoGeneral = mongoose.model<iObjetivoGeneral>('Objetivo', schema)
// falta user ID, esto es para relacionar los datos a un unico usuario
