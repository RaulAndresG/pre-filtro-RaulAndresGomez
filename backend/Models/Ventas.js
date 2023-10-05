const { Schema, model } = require('mongoose');

const ModeloMotoSchema = new Schema({
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

const ModeloMoto = model('ModeloMoto', ModeloMotoSchema);

const VentasSchema = new Schema({
  modelo_moto: {
    type: Schema.Types.ObjectId,
    ref: 'ModeloMoto',
    required: true,
  },
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

const Ventas = model('Ventas', VentasSchema , 'Ventas');

module.exports = { ModeloMoto, Ventas };
