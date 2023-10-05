const TallerServicio = require('../Models/TallerServicio.js');

// Controladores para talleres de servicio
const postTallerServicio = async (req, res) => {
    try {
        const { nombre, marca_moto_atienden, direccion, numero_telefono, horario_atencion } = req.body;
        const tallerServicio = new TallerServicio({ nombre, marca_moto_atienden, direccion, numero_telefono, horario_atencion });
        await tallerServicio.save();
        res.json({
            "message": "Taller de servicio creado exitosamente",
            tallerServicio
        });
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};

const putTallerServicio = async (req, res) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    try {
        const tallerServicio = await TallerServicio.findByIdAndUpdate(id, resto, { new: true });
        if (!tallerServicio) {
            return res.status(404).json({ message: 'Taller de servicio no encontrado' });
        }
        res.json({
            msg: "Taller de servicio actualizado",
            tallerServicio
        });
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};

const deleteTallerServicio = async (req, res) => {
    const { id } = req.params;
    try {
        const remove = await TallerServicio.findByIdAndRemove(id);
        if (!remove) {
            return res.status(404).json({ message: 'Taller de servicio no encontrado' });
        }
        res.json({ message: 'Taller de servicio borrado correctamente' });
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};

const obtenerTalleresServicio = async (req, res) => {
    try {
        const talleresServicio = await TallerServicio.find().limit(100);
        res.json(talleresServicio);
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor" });
    }
};

module.exports = { obtenerTalleresServicio, postTallerServicio, deleteTallerServicio, putTallerServicio };
