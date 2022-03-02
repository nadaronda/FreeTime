import mongoose, { Document, Schema } from 'mongoose'

export interface icategoria extends Document {
    categoria: String,
}

const schema = new Schema({
  categoria: { type: String, require: true }
}, {
  // timestamps: true
})

export const Categoria = mongoose.model<icategoria>('categoria', schema)
