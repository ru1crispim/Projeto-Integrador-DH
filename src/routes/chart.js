const express = require("express");
const router = express.Router();
const chartController = require('../controllers/chartController');

router.get('/carrinho',chartController.chart);

module.exports=router;