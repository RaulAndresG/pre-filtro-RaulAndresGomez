const mongoose = require('mongoose');


const motoSchema =   new mongoose.Schema({
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

const comentarioSchema =   new mongoose.Schema({

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
  modelo_moto:[motoSchema],
}, {
  timestamps: true,
});

// Modelo para Comentario
const Comentario = mongoose.model('Comentarios', comentarioSchema, 'Comentarios');

module.exports =  Comentario;
