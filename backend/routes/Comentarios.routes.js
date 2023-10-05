const express = require('express')
const router = express.Router()
const {obtenerEmpleados,deleteEmpleado,postEmpleado,putEmpleados}  = require('../Controllers/Comentarios.controllers.js')

router.get('/', obtenerEmpleados)

router.delete('/:id',deleteEmpleado)

router.post('/',postEmpleado)

router.put('/:id',putEmpleados)

module.exports = router