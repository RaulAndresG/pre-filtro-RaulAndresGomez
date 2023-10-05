const express = require('express');
const router = express.Router();
const {obtenerTodos,postAccesorios,deleteAccesorios,putAccesorios} = require('../Controllers/Accesorios.controllers.js'); 

// Ruta para obtener todos los clientes
router.get('/', obtenerTodos);

router.delete('/:id',deleteAccesorios)

router.post('/',postAccesorios)

router.put('/:id',putAccesorios)

module.exports = router;
