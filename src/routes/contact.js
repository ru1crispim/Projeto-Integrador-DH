const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contactController');

const logDBMiddleware = require('../middlewares/logDB')

router.get('/contato',contactController.contact);

module.exports=router;
