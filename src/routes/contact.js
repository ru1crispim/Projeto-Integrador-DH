const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/contato',contactController.contact);

module.exports=router;
