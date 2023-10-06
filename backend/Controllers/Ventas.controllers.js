const Ventas = require('../Models/Ventas.js');

const postVentas = async (req, res) => {
  const { modelo_moto, anio_venta, cantidad_vendida, precio_promedio_venta } = req.body;

  try {
    const venta = new Ventas({ modelo_moto, anio_venta, cantidad_vendida, precio_promedio_venta });
    await venta.save();

    res.json({
      message: 'Venta registrada con éxito',
      venta,
    });
  } catch (error) {
    console.error('Error al crear la venta:', error);
    res.status(500).json({ error: 'Error al crear la venta' });
  }
};

const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Ventas.find().limit(100);
    res.json(ventas);
  } catch (error) {
    console.error('Error al obtener las ventas:', error);
    res.status(500).json({ error: 'Error al obtener las ventas' });
  }
};

const putVentas = async (req, res) => {
  const { id } = req.params;
  const { modelo_moto, anio_venta, cantidad_vendida, precio_promedio_venta } = req.body;

  try {
    const venta = await Ventas.findByIdAndUpdate(id, { modelo_moto, anio_venta, cantidad_vendida, precio_promedio_venta }, { new: true });

    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }

    res.json({
      message: 'Venta actualizada correctamente',
      venta,
    });
  } catch (error) {
    console.error('Error al actualizar la venta:', error);
    res.status(500).json({ error: 'Error al actualizar la venta' });
  }
};

const deleteVentas = async (req, res) => {
  const { id } = req.params;

  try {
    const venta = await Ventas.findByIdAndRemove(id);

    if (!venta) {
      return res.status(404).json({ message: 'Venta no encontrada' });
    }

    res.json({ message: 'Venta eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la venta:', error);
    res.status(500).json({ error: 'Error al eliminar la venta' });
  }
};

module.exports = { postVentas, obtenerVentas, putVentas, deleteVentas };
