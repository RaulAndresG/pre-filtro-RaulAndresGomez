const express = require('express');
const router = express.Router();
const {obtenerVentas,postVentas,deleteVentas,putVentas} = require('../Controllers/Ventas.controllers')

router.get('/',obtenerVentas)

router.post('/',postVentas)

router.delete('/:id',deleteVentas)

router.put('/:id',putVentas)


module.exports = router