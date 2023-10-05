const express = require('express');
const router = express.Router();
const {obtenerInventario, deleteInventario,postInventario,putInventario} = require('../Controllers/Eventos.controllers.js')

router.get('/', obtenerInventario)

router.delete('/:id', deleteInventario)

router.post('/', postInventario)

router.put('/:id', putInventario)


module.exports = router