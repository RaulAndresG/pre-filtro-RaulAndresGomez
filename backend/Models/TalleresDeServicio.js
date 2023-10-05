const { Schema, model } = require('mongoose');

const TalleresDeServicioSchema = Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  marca_moto_atienden: [{
    type: String,
    required: true,
    trim: true,
  }],
  direccion: {
    type: String,
    required: true,
    trim: true,
  },
  numero_telefono: {
    type: String,
    required: true,
    trim: true,
  },
  horario_atencion: {
    type: String,
    required: true,
    trim: true,
  },
});

const TalleresDeServicio = model('TalleresDeServicio', TalleresDeServicioSchema, 'TalleresDeServicio');

module.exports = TalleresDeServicio;
