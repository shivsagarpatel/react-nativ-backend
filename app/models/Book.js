import mongoose, { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true },
  caption: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default model('Book', bookSchema);
