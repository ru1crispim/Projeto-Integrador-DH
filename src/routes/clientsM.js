const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const ClientesController = require("../controllers/ClientesController");
const userController = require('../controllers/ClientesController');
const auth = require('../middlewares/auth')

// router.get('/clientes', ClientesController.client);

router.get('/clientes', ClientesController.list);

router.get('/clientes/editar/:id', ClientesController.DirectToUpdate);
router.put('/clientes/editar/:id', ClientesController.update);

router.get('/clientes/cadastrar', ClientesController.AcessCreate);
router.post('/clientes/cadastrar', ClientesController.create);

router.delete('/clientes/deletar/:id', ClientesController.destroy)

module.exports = router;
