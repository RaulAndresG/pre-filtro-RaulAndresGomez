const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  fecha_lugar: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  marcas_modelos_destacados: [{
    type: String,
    required: true,
    trim: true,
  }],
}, {
  timestamps: true,
});

const Evento = mongoose.model('Eventos', eventoSchema ,'Eventos');

module.exports = Evento;
