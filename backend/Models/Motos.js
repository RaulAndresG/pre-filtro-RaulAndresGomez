const { Schema, model } = require('mongoose');

const MotosSchema = Schema(
  {
    _id: {
      $oid: {
        type: String,
        required: true,
      },
    },
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

const Motos = model('Motos', MotosSchema, 'Motos');

module.exports = Motos;
