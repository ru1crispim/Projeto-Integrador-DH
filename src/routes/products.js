const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const productController = require('../controllers/productController');

const logDBMiddleware = require('../middlewares/logDB')

router.get('/allproducts',productController.products);
router.get('/product/settings',(req,res)=>{res.render('productSettings')});


router.get('/productform/registration', (req, res)=>{
    return res.render("productFormRegistration")
})
router.get('/productform/update', (req, res)=>{
    return res.render("productFormUpdate")
})

router.post('/createproduct',productController.create);
router.put('/updateproduct',productController.update);



module.exports=router;