const express = require('express');
const router = express.Router();
const {obtenerTalleresServicio,postTallerServicio,deleteTallerServicio,putTallerServicio} = require('../Controllers/TalleresDeServicio.controllers.js')

router.get('/',obtenerTalleresServicio)

router.post('/',postTallerServicio)

router.delete('/:id',deleteTallerServicio)

router.put('/:id',putTallerServicio)


module.exports = router