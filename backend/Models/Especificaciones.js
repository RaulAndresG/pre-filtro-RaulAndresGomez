const mongoose = require('mongoose');

const motoSchema = new mongoose.Schema({
 
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

const especificacionesMotoSchema = new mongoose.Schema({
  potencia: {
    type: Number,
    required: true,
  },
  torque: {
    type: Number,
    required: true,
  },
  peso_seco: {
    type: Number,
    required: true,
  },
  altura_asiento: {
    type: Number,
    required: true,
  },
  tipo_chasis: {
    type: String,
    required: true,
    trim: true,
  },
  suspension_delantera: {
    type: String,
    required: true,
    trim: true,
  },
  suspension_trasera: {
    type: String,
    required: true,
    trim: true,
  },
  frenos_delanteros: {
    type: String,
    required: true,
    trim: true,
  },
  frenos_traseros: {
    type: String,
    required: true,
    trim: true,
  },
  neumaticos: {
    type: String,
    required: true,
    trim: true,
  },
  capacidad_tanque: {
    type: Number,
    required: true,
  },
  aceleracion_0a_100: {
    type: Number,
    required: true,
  },
  modelo_moto: [motoSchema],
}, {
  timestamps: true,
});





// Modelo para Especificaciones
const Especificaciones = mongoose.model('Especificaciones', especificacionesMotoSchema, 'Especificaciones');

module.exports = Especificaciones;
