import mongoose, { Document, Schema } from 'mongoose'

export interface ipasosIntermedios extends Document {
    escalon: String,
    description: String,
    timeImport: Number, // Add fecha importante "presentación e papeles" o fecha límite

    // categori_id
}

const schema = new Schema({
  escalon: { type: String, require: true },
  description: { type: String, require: true },
  timeImport: { type: Number, require: true }
}, {
  timestamps: true
})

export const Escalon = mongoose.model<ipasosIntermedios>('escalon', schema)
// falta campo obj general id
