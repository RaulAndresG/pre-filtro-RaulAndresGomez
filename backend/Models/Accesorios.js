const mongoose = require('mongoose');

const motoCompatibleSchema = new mongoose.Schema({
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
const AccesoriosSchema = new mongoose.Schema({
  nombre: {
  type: String,
  required: true,
  trim: true,
},
descripcion: {
  type: String,
  required: true,
  trim: true,
},
precio: {
  type: Date,
  required: true,
},
modelo_moto_compatible: [motoCompatibleSchema],
}, {
timestamps: true,
});

const Accesorios = mongoose.model('Accesorios', AccesoriosSchema ,'Accesorios');
module.exports = Accesorios;


