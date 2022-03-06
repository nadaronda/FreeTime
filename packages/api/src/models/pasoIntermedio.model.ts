import mongoose, { Document, Schema } from 'mongoose'
import { iObjetivoGeneral } from './objetivoGeneral.model'
import { icategoria } from './categoria.model'
export interface ipasosIntermedios extends Document {
    escalon: String,
    descripcion: String,
    timeImport: Date, // Add fecha importante "presentación e papeles" o fecha límite
    objetivo: iObjetivoGeneral['_id'];
    categoria:icategoria['_id']
    // me falta añadir lo de la categoria
    // categori_id
}

const schema = new Schema({
  escalon: { type: String, require: true },
  descripcion: { type: String, require: true },
  timeImport: { type: Date, require: true },
  objetivo: { type: Schema.Types.ObjectId, ref: 'Objetivo' },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' }
}, {
  timestamps: true
})

export const Escalon = mongoose.model<ipasosIntermedios>('escalon', schema)
