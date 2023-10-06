const mongoose = require('mongoose');

const MarcasSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  pais_origen: {
    type: String,
    required: true,
    trim: true
  },
  anio_fundacion: {
    type: Number,
    required: true
  },
  sitio_web: {
    type: String,
    required: true,
    trim: true
  },
  logotipo: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
});

const Marcas = mongoose.model('Marcas', MarcasSchema, 'Marcas');

module.exports = Marcas;
