const Marcas = require('../Models/Marcas.js');

const postMarcas = async (req, res) => {
  try {
    const { nombre, pais_origen, anio_fundacion, sitio_web, logotipo } = req.body;
    const marca = new Marcas({ nombre, pais_origen, anio_fundacion, sitio_web, logotipo });
    await marca.save();
    res.json({
      message: "Se ha creado la marca correctamente",
      marca,
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

const putMarcas = async (req, res) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;
  try {
    const marca = await Marcas.findByIdAndUpdate(id, resto, { new: true });
    if (!marca) {
      return res.status(404).json({ message: 'Marca no encontrada' });
    }
    res.json({
      msg: "Marca Actualizada",
      marca,
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

const deleteMarca = async (req, res) => {
  const { id } = req.params;
  try {
    const remove = await Marcas.findByIdAndRemove(id);
    if (!remove) {
      return res.status(404).json({ message: 'Marca no encontrada' });
    }
    res.json({ message: 'Marca borrada correctamente' });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

const obtenerMarcas = async (req, res) => {
  try {
    const marcas = await Marcas.find().limit(100);
    res.json(marcas);
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { obtenerMarcas, postMarcas, deleteMarca, putMarcas };
