const express = require('express');
const router = express.Router();
const {obtenerEventos, deleteEventos,postEventos,putEventos} = require('../Controllers/Eventos.controllers.js')

router.get('/', obtenerEventos)

router.delete('/:id', deleteEventos)

router.post('/', postEventos)

router.put('/:id', putEventos)


module.exports = router