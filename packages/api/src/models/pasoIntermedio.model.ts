import mongoose, { Document, Schema } from 'mongoose'

export interface ipasosIntermedios extends Document {
    escalon: String,
    description: String,
}

const schema = new Schema({
  escalon: { type: String, require: true },
  description: { type: String, require: true }
}, {
  timestamps: true
})

export const Escalon = mongoose.model<ipasosIntermedios>('escalon', schema)
