const express = require('express');
const router = express.Router();
const fabricantesController = require('../controllers/fabricantesController');

router.get('/fabricantes', fabricantesController.listar);

router.get('/fabricantes/cadastrar', fabricantesController.accesAdict);
router.post('/fabricantes/cadastrar', fabricantesController.adicionar);

router.delete('/fabricantes/deletar/:id', fabricantesController.remover);

module.exports = router;