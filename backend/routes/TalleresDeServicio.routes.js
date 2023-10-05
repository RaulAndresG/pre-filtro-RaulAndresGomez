const express = require('express');
const router = express.Router();
const {obtenerUsuarios,postUsuarios,deleteUsuarios,putUsuarios,changeUsuarios} = require('../Controllers/TalleresDeServicio.controllers.js')

router.get('/',obtenerUsuarios)

router.post('/',postUsuarios)

router.delete('/:id',deleteUsuarios)

router.put('/:id',putUsuarios)

router.delete('/change/:id',changeUsuarios)

module.exports = router