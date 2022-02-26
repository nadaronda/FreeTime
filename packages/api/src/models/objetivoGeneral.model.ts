import mongoose, { Document, Schema } from 'mongoose'

export interface iobjetivoGeneral extends Document {
    objetivo: String,
    descripcion: String,
    img: String,
}

const schema = new Schema({
  objetive: { type: String, require: true },
  descripcion: { type: String, require: false },
  img: String
  // true es que si o si se debe solicitar ese campo, false no es necesario
}, {
  timestamps: true // esto hace que cada vez que s guarde data la informacion tenga fecha y hora
})

export const ObjetivoGeneral = mongoose.model<iobjetivoGeneral>('Objetivo', schema)
