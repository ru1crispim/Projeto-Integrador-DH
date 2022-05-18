const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/produtos',productController.products);


module.exports=router;