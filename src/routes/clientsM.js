const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const ClientesController = require("../controllers/ClientesController");
const userController = require('../controllers/ClientesController');
const addressController = require('../controllers/addressController');
const auth = require('../middlewares/auth');
const db = require('../models');

// router.get('/clientes', ClientesController.client);

router.get('/clientes', ClientesController.list);

router.get('/clientes/editar/:id', ClientesController.DirectToUpdate);
router.get('/clientes2/:id', async function(req, res){
    const {id} = req.params
    const clientes = await db.Clientes.findOne({
        where: {
            id
        },
        include: [
            {
                model: db.Usuarios
            }
        ]
    })
    res.json(clientes)

});

router.put('/clientes/editar/:id', ClientesController.update);

router.get('/clientes/cadastrar', ClientesController.AcessCreate);
router.post('/clientes/cadastrar', ClientesController.create);

router.post('/clientes/endereco', addressController.address);

router.delete('/clientes/deletar/:id', ClientesController.destroy)

module.exports = router;
