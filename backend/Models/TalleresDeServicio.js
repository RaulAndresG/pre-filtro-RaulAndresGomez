const mongoose = require('mongoose');


const TalleresDeServicioSchema = new mongoose.Schema({
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
  
}, {
    timestamps: true,
  });

const TalleresDeServicio =  mongoose.model('TalleresDeServicio', TalleresDeServicioSchema, 'TalleresDeServicio');

module.exports = TalleresDeServicio;
