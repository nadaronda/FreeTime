import mongoose, { Document, Schema } from 'mongoose';

export interface ipasosIntermedios extends Document {
    name: String,
    description: String,
   
}

const schema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
});

export const escalon = mongoose.model<ipasosIntermedios>('Objetivo', schema);