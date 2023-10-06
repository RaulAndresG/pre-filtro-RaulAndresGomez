const Eventos = require('../Models/Eventos.js');

const postEventos = async (req, res) => {
  try {
    const { nombre, fecha_lugar, descripcion, marcas_modelos_destacados } = req.body;

    const evento = new Eventos({
      nombre,
      fecha_lugar,
      descripcion,
      marcas_modelos_destacados,
    });

    await evento.save();

    res.json({
      message: 'Evento registrado con éxito',
      evento,
    });
  } catch (error) {
    console.error('Error al crear el evento:', error);
    res.status(500).json({ error: 'Error al crear el evento' });
  }
};

const obtenerEventos = async (req, res) => {
  try {
    const eventos = await Eventos.find().limit(100);
    res.json(eventos);
  } catch (error) {
    console.error('Error al obtener los eventos:', error);
    res.status(500).json({ error: 'Error al obtener los eventos' });
  }
};

const putEventos = async (req, res) => {
  const { id } = req.params;

  try {
    const { nombre, fecha_lugar, descripcion, marcas_modelos_destacados } = req.body;

    const evento = await Eventos.findByIdAndUpdate(
      id,
      {
        nombre,
        fecha_lugar,
        descripcion,
        marcas_modelos_destacados,
      },
      { new: true }
    );

    if (!evento) {
      return res.status(404).json({ message: 'Evento no encontrado' });
    }

    res.json({
      message: 'Evento actualizado correctamente',
      evento,
    });
  } catch (error) {
    console.error('Error al actualizar el evento:', error);
    res.status(500).json({ error: 'Error al actualizar el evento' });
  }
};

const deleteEventos = async (req, res) => {
  const { id } = req.params;

  try {
    const evento = await Eventos.findByIdAndRemove(id);

    if (!evento) {
      return res.status(404).json({ message: 'Evento no encontrado' });
    }

    res.json({ message: 'Evento eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el evento:', error);
    res.status(500).json({ error: 'Error al eliminar el evento' });
  }
};

module.exports = { postEventos, obtenerEventos, putEventos, deleteEventos };
