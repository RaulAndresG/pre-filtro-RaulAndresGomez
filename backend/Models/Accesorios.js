const { Schema, model } = require('mongoose');

const motoCompatibleSchema = Schema({
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

const AccesoriosSchema = Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
    trim: true,
  },
  celular: {
    type: Number,
    required: true,
    trim: true,
  },
  correoElectronico: {
    type: String,
    required: true,
    trim: true,
  },
  empresa: {
    type: String,
    required: true,
    trim: true,
  },
  modelo_moto_compatible: [motoCompatibleSchema],
}, {
  timestamps: true,
});

// Modelo para Accesorios
const Accesorios = model('Accesorios', AccesoriosSchema, "Accesorios");

module.exports = { Accesorios };
