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

const especificacionesMotoSchema = Schema({
  potencia: {
    type: Number,
    required: true,
  },
  torque: {
    type: Number,
    required: true,
  },
  pesoSeco: {
    type: Number,
    required: true,
  },
  alturaAsiento: {
    type: Number,
    required: true,
  },
  tipoChasis: {
    type: String,
    required: true,
    trim: true,
  },
  suspensionDelantera: {
    type: String,
    required: true,
    trim: true,
  },
  suspensionTrasera: {
    type: String,
    required: true,
    trim: true,
  },
  frenosDelanteros: {
    type: String,
    required: true,
    trim: true,
  },
  frenosTraseros: {
    type: String,
    required: true,
    trim: true,
  },
  neumaticos: {
    type: String,
    required: true,
    trim: true,
  },
  capacidadTanque: {
    type: Number,
    required: true,
  },
  aceleracion0a100: {
    type: Number,
    required: true,
  },
});

const especificacionesSchema = Schema({
  modeloMotoCompatible: [motoSchema],
  especificacionesMoto: especificacionesMotoSchema,
});

// Modelo para Especificaciones
const Especificaciones = model('Especificaciones', especificacionesSchema, "Especificaciones");

module.exports = { Especificaciones };
