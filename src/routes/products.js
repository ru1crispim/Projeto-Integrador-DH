const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const productController = require('../controllers/productController');

const logDBMiddleware = require('../middlewares/logDB')

router.get('/produtos',productController.products);
router.post('/product',productController.create);
router.post('/product/:id',productController.update); //fazer put após método override
router.get('/produtos2', (req, res)=>{
    return res.render("productForms")
})


module.exports=router;