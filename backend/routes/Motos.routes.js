const express = require('express');
const router = express.Router();
const {obtenerMotos,postMotos,deleteMotos,putMotos} = require('../Controllers/Motos.controllers')

router.get('/',obtenerMotos)

router.post('/',postMotos)

router.delete('/:id',deleteMotos)

router.put('/:id',putMotos)

router.delete('/change/:id')

module.exports = router