const express = require("express");
const router = express.Router();
const usedProducts = require('../controllers/usedController');

router.get('/produtosusados',usedProducts.usedProducts);

module.exports=router;