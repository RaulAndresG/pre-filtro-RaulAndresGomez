const mongoose = require('mongoose');

const MotosSchema = new mongoose.Schema(
  {
    marca: {
      type: String,
      required: [true, 'Marca is required'],
    },
    modelo: {
      type: String,
      required: [true, 'Model is required'],
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
      required: [true, 'Tipo de motor is required'],
    },
    descripcion: {
      type: String,
      required: [true, 'Description is required'],
    },
    imagenes: [String],
    comentarios: [String],
  },
  {
    timestamps: true,
  }
);

const Motos = mongoose.model('Motos', MotosSchema, 'Motos');

module.exports = Motos;
