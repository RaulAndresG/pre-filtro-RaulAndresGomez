const mongoose = require('mongoose');

const ModeloMotoSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
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
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagenes: [String],
  comentarios: [String],
});


const VentasSchema =  new mongoose.Schema({
  modelo_moto: [ModeloMotoSchema],
  anio_venta: {
    type: Number,
    required: true,
  },
  cantidad_vendida: {
    type: Number,
    required: true,
  },
  precio_promedio_venta: {
    type: Number,
    required: true,
  },
});

const Ventas = mongoose.model('Ventas', VentasSchema , 'Ventas');

module.exports = Ventas ;
