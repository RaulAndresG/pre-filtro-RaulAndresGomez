const express = require('express')
const router = express.Router()
const {obtenerProyecto, postProyectos, deleteProyecto,putUsuarios} = require('../Controllers/Marcas.controllers.js')

router.get('/', obtenerProyecto)

router.post('/', postProyectos)

router.delete('/:id', deleteProyecto)

router.put('/:id', putUsuarios)

module.exports = router