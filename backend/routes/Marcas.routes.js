const express = require('express')
const router = express.Router()
const {obtenerMarcas, postMarcas, deleteMarca,putMarcas} = require('../Controllers/Marcas.controllers.js')

router.get('/', obtenerMarcas)

router.post('/', postMarcas)

router.delete('/:id', deleteMarca)

router.put('/:id', putMarcas)

module.exports = router