const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const productController = require('../controllers/productController');

const logDBMiddleware = require('../middlewares/logDB')

router.get('/allproducts',productController.products);
router.post('/product',productController.create);
router.post('/product/:id',productController.update); //fazer put após método override
router.get('/productform', (req, res)=>{
    return res.render("productForms")
})


module.exports=router;