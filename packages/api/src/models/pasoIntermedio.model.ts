import mongoose, { Document, Schema } from 'mongoose'
import { iObjetivoGeneral } from './objetivoGeneral.model'
export interface ipasosIntermedios extends Document {
    escalon: String,
    descripcion: String,
    timeImport: Number, // Add fecha importante "presentación e papeles" o fecha límite
    objetivo: iObjetivoGeneral['_id'];
    // me falta añadir lo de la categoria
    // categori_id
}

const schema = new Schema({
  escalon: { type: String, require: true },
  descripcion: { type: String, require: true },
  timeImport: { type: Number, require: true },
  objetivo: { type: Schema.Types.ObjectId, ref: 'Objetivo' }
}, {
  timestamps: true
})

export const Escalon = mongoose.model<ipasosIntermedios>('escalon', schema)
// falta campo obj general id
