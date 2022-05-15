const express = require("express");
const router = express.Router();
const contatoController = require('../controllers/contactController');

router.get('/contato',contatoController.contato);

module.exports=router;
