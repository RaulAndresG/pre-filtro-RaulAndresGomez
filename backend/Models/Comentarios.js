const { Schema, model } = require('mongoose');

const motoSchema = Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  marca: {
    type: String,
    required: true,
    trim: true,
  },
  modelo: {
    type: String,
    required: true,
    trim: true,
  },
  cilindraje: {
    type: Number,
    required: true,
  },
  anio: {
    type: Number,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  tipo_motor: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  imagenes: [String],
  comentarios: [String],
});

const comentarioSchema = Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  modelo_moto: motoSchema,
  usuario: {
    type: String,
    required: true,
    trim: true,
  },
  comentario: {
    type: String,
    required: true,
    trim: true,
  },
  calificacion: {
    type: Number,
    required: true,
  },
});

// Modelo para Comentario
const Comentario = model('Comentario', comentarioSchema, "Comentarios");

module.exports = { Comentario };
