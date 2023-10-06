const express = require('express')
const router = express.Router()
const {obtenerEspecificaciones,deleteEspecificaciones,postEspecificaciones,putEspecificaciones} = require('../Controllers/Especificaciones.controllers.js')

router.get('/', obtenerEspecificaciones)

router.delete('/:id',deleteEspecificaciones)

router.post('/',postEspecificaciones)

router.put('/:id',putEspecificaciones)


module.exports = router