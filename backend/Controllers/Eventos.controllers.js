const Evento= require('../Models/Eventos.js');

// Controlador para crear un nuevo evento
const postEvento = async (req, res) => {
    try {
        const { nombre, fecha_lugar, descripcion, marcas_modelos_destacados } = req.body;
        const evento = new Evento({ nombre, fecha_lugar, descripcion, marcas_modelos_destacados });
        await evento.save();
        res.json({
            "message": "Se creó el evento exitosamente",
            evento
        });
    } catch (error) {
        res.status(404).json({ message: "Error al crear el evento" });
    }
}

// Controlador para actualizar un evento
const putEvento = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const evento = await Evento.findByIdAndUpdate(id, resto, { new: true });
    res.json({
        msg: "Evento actualizado",
        evento: evento
    });
}

// Controlador para eliminar un evento
const deleteEvento = async (req, res) => {
    const { id } = req.params;
    try {
        const remove = await Evento.findByIdAndRemove(id);
        if (!remove) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }

        res.json({ message: 'Evento eliminado correctamente' });
    } catch (error) {
        res.status(404).json({ error: "Error en deleteEvento" });
    }
}

// Controlador para obtener eventos
const obtenerEventos = async (req, res) => {
    try {
        const result = await Evento.find().limit(100);
        res.json(result);
    } catch (error) {
        res.status(404).json("No se pudo obtener, el problema está en el controlador");
    }
}

module.exports = { obtenerEventos, deleteEvento, postEvento, putEvento };
