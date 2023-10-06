const express = require('express')
const router = express.Router()
const {obtenerComentarios,deleteComentario,postComentario,putComentario}  = require('../Controllers/Comentarios.controllers.js')

router.get('/', obtenerComentarios)

router.delete('/:id',deleteComentario)

router.post('/',postComentario)

router.put('/:id',putComentario)

module.exports = router