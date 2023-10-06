const Comentario = require('../Models/Comentarios.js');

const postComentario = async (req, res) => {
    try {
        const { modelo_moto, usuario, comentario, calificacion } = req.body;
        const comentarioNuevo = new Comentario({ modelo_moto, usuario, comentario, calificacion });
        await comentarioNuevo.save();
        res.json({
            "message": "Se posteo comentario",
            comentario: comentarioNuevo
        });
    } catch (error) {
        // Manejo de errores aquí
        res.status(500).json({ error: "Error al publicar el comentario" });
    }
}

const putComentario = async (req, res) => {
    const { id } = req.params;
  
    const { _id, ...resto } = req.body;
  
    try {
      const comentario = await Comentario.findByIdAndUpdate(id, resto, { new: true });
  
      if (!comentario) {
        return res.status(404).json({ message: "Comentario no encontrado" });
      }
  
      res.json({
        msg: "Comentario actualizado exitosamente",
        comentario // Cambia 'accesorio' a 'comentario'
      });
    } catch (error) {
      res.status(500).json({ error: "Error en putComentario" });
    }
}


const deleteComentario = async (req, res) => {
    const { id } = req.params;
    try {
        const remove = await Comentario.findByIdAndRemove(id);
        if (!remove) {
            return res.status(404).json({ message: "No se encontró el comentario" });
        }
        res.json({ message: "Comentario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Fallo en eliminar el comentario" });
    }
}

const obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await Comentario.find().limit(1000);
        res.json(comentarios);
    } catch (error) {
        res.status(500).json("Error al obtener los comentarios");
    }
}

module.exports = { obtenerComentarios, deleteComentario, postComentario, putComentario };
