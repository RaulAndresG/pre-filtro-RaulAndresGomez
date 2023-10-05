const Especificaciones = require('../Models/Especificaciones.js');

// Crear nuevas especificaciones
const postEspecificaciones = async (req, res) => {
  try {
    const {
      modelo_moto,
      potencia,
      torque,
      peso_seco,
      altura_asiento,
      tipo_chasis,
      suspension_delantera,
      suspension_trasera,
      frenos_delanteros,
      frenos_traseros,
      neumaticos,
      capacidad_tanque,
      aceleracion_0_100,
    } = req.body;

    const especificaciones = new Especificaciones({
      modelo_moto,
      potencia,
      torque,
      peso_seco,
      altura_asiento,
      tipo_chasis,
      suspension_delantera,
      suspension_trasera,
      frenos_delanteros,
      frenos_traseros,
      neumaticos,
      capacidad_tanque,
      aceleracion_0_100,
    });

    await especificaciones.save();

    res.json({
      message: "Se postearon las especificaciones",
      especificaciones,
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// Actualizar especificaciones existentes
const putEspecificaciones = async (req, res) => {
  const { id } = req.params;
  const { _id, ...resto } = req.body;

  try {
    const especificaciones = await Especificaciones.findByIdAndUpdate(id, resto, { new: true });
    if (!especificaciones) {
      return res.status(404).json({ message: 'Especificaciones no encontradas' });
    }
    res.json({
      msg: "Especificaciones Actualizadas",
      especificaciones,
    });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// Eliminar especificaciones existentes
const deleteEspecificaciones = async (req, res) => {
  const { id } = req.params;

  try {
    const remove = await Especificaciones.findByIdAndRemove(id);
    if (!remove) {
      return res.status(404).json({ message: 'Especificaciones no encontradas' });
    }
    res.json({ message: 'Especificaciones borradas correctamente' });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// Obtener todas las especificaciones
const obtenerEspecificaciones = async (req, res) => {
  try {
    const especificaciones = await Especificaciones.find().limit(100);
    res.json(especificaciones);
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

module.exports = { obtenerEspecificaciones, deleteEspecificaciones, postEspecificaciones, putEspecificaciones };
