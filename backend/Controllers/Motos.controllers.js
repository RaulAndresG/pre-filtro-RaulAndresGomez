const Motos = require('../Models/Motos.js');

const postMotos = async (req, res) => {
  const { marca, modelo, cilindraje, anio, precio, tipo_motor, descripcion, imagenes, comentarios } = req.body;

  try {
    const moto = new Motos({ marca, modelo, cilindraje, anio, precio, tipo_motor, descripcion, imagenes, comentarios });
    await moto.save();

    res.json({
      message: 'Moto registrada con éxito',
      moto,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

const putMotos = async (req, res) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;

  try {
    const moto = await Motos.findByIdAndUpdate(id, resto, { new: true });
    if (!moto) {
      return res.status(404).json({ message: 'Moto no encontrada' });
    }

    res.json({
      msg: 'Moto Actualizada',
      moto,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

const deleteMotos = async (req, res) => {
  const { id } = req.params;

  try {
    const remove = await Motos.findByIdAndRemove(id);
    if (!remove) {
      return res.status(404).json({ message: 'Moto no encontrada' });
    }

    res.json({ message: 'Moto eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

const obtenerMotos = async (req, res) => {
  try {
    const motos = await Motos.find().limit(100);
    res.json(motos);
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = { obtenerMotos, postMotos, deleteMotos, putMotos };
