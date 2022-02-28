import mongoose, { Document, Schema } from 'mongoose'

export interface iobjetivoGeneral extends Document {
    objetivo: String,
    descripcion: String,
    limitTime: Number, // limit time es un dato donde te das un tiempo determinado para terminar el objetivo
    img: String,
}

const schema = new Schema({
  objetive: { type: String, require: true },
  descripcion: { type: String, require: false },
  limitTime: { type: Number, require: true },
  img: String
  // true es que si o si se debe solicitar ese campo, false no es necesario
}, {
  timestamps: true // esto hace que cada vez que s guarde data la informacion tenga fecha y hora
})

export const ObjetivoGeneral = mongoose.model<iobjetivoGeneral>('Objetivo', schema)
// falta user ID, esto es para relacionar los datos a un unico usuario
