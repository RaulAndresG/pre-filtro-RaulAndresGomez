const Accesorios = require('../Models/Accesorios.js');

const bcryptjs = require ('bcryptjs');


const postAccesorios = async (req, res) => {
  const { nombre, descripcion, precio, marca } = req.body;
  const accesorio = new Accesorios({ nombre, descripcion, precio, marca });

  // Guardar en MONGODB
  await accesorio.save();

  res.json({
    "message": "Accesorios creado exitosamente",
    accesorio
  });
}

const putAccesorios = async (req, res) => {
  const { id } = req.params;

  const { _id, ...resto } = req.body;

  try {
    const accesorio = await Accesorios.findByIdAndUpdate(id, resto, { new: true });

    if (!accesorio) {
      return res.status(404).json({ message: "Accesorios no encontrado" });
    }

    res.json({
      msg: "Accesorios actualizado exitosamente",
      accesorio
    });
  } catch (error) {
    res.status(500).json({ error: "Error en putAccesorios" });
  }
}

const deleteAccesorios = async (req, res) => {
  const { id } = req.params;

  try {
    const remove = await Accesorios.findByIdAndRemove(id);

    if (!remove) {
      return res.status(404).json({ message: "Accesorios no encontrado" });
    }

    res.json({ message: "Accesorios borrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error en deleteAccesorios" });
  }
}

const obtenerTodos = async (req, res) => {
  try {
    const accesorios = await Accesorios.find().limit(100); 
    res.json(accesorios);
  } catch (error) {
console.error('Error en obtenerTodos:', error);
res.status(500).json({ error: 'Error en obtenerTodos' });
  }
}

module.exports = { obtenerTodos, postAccesorios, deleteAccesorios, putAccesorios };
