const Usuarios = require('../Models/Usuarios.js')
const bcryptjs = require ('bcryptjs');



const postUsuarios = async (req, res)=>{

    const {nombre, email, password} = req.body;
    const usuario = new Usuarios({nombre, email, password});
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    await usuario.save();
    res.json({
        "message":"post api",
        usuario
    })
}


const changeUsuarios = async (req, res)=>{
    const {id} = req.params
    const usuario = await Usuarios.findByIdAndUpdate( id, { estado: false } );
    res.json(usuario)
}

const deleteUsuarios = async (req, res) => {
    const { id } = req.params;
  
    try {
      const usuario = await Usuarios.findByIdAndRemove(id);
  
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      res.status(500).json({ error: 'Error al eliminar usuario.' });
    }
  };
  

const obtenerUsuarios = async(req,res) =>{
    try {
        const result = await Usuarios.find().limit(100)
        res.json(result)
    } catch (error) {
        res.status(404).json('nocapto')
    }
}

const putUsuarios = async (req, res)=>{
      const { id } = req.params;
      const { _id, password, googleSignIn, ...resto } = req.body;
      if ( password ) {
          const salt = bcryptjs.genSaltSync();
          resto.password = bcryptjs.hashSync( password, salt );
      }
      const usuario = await Usuarios.findByIdAndUpdate( id, resto, {new:true});
      res.json({
          msg:"Usuario Actualizado",
          usuario : usuario
      });
  }

module.exports = {obtenerUsuarios,postUsuarios,deleteUsuarios,changeUsuarios,putUsuarios}