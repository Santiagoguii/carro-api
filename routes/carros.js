const express = require('express');
const router = express.Router();
const carroController = require('../Controllers/carroController');

// Rotas CRUD
router.post('/', carroController.createCarro);
router.get('/', carroController.getCarros);
router.get('/:id', carroController.getCarroById);
router.put('/:id', carroController.updateCarro);
router.delete('/:id', carroController.deleteCarro);

module.exports = router;
