import mongoose, { Document, Schema } from 'mongoose';

export interface iobjetivoGeneral extends Document {
    name: String,
    description: String,
   
}

const schema = new Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
});

export const objetivoGeneral = mongoose.model<iobjetivoGeneral>('Objetivo', schema);