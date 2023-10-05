const express = require('express')
const router = express.Router()
const {obtenerEmpresas,deleteEmpresa,postEmpresas,putEmpresas} = require('../Controllers/Especificaciones.controllers.js')

router.get('/', obtenerEmpresas)

router.delete('/:id',deleteEmpresa)

router.post('/',postEmpresas)

router.put('/:id',putEmpresas)


module.exports = router