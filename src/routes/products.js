const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const productController = require('../controllers/productController');
const path = require('path');
const multer = require('multer');
const logDBMiddleware = require('../middlewares/logDB')
const {body}= require('express-validator');



router.get('/allproducts',productController.products);
router.get('/product/settings',(req,res)=>{res.render('productSettings')});


router.get('/productform/registration', (req, res)=>{
    return res.render("productFormRegistration")
})
router.get('/productform/update', (req, res)=>{
    return res.render("productFormUpdate")
})


// Rota para cadastro de produto + envio de arquivo (Multer)



const multerStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const folder = path.join(__dirname,'../public/productsImg');
        cb(null,folder);
    },
    filename:(req,file,cb)=>{
        const imageName = Date.now() +file.originalname;
        cb(null,imageName);
    }
});
const upload = multer({storage:multerStorage}) //constante usada para incluir na rota do formulario para subir arquivo

const validacoes = [
    body("produtoNome").notEmpty().withMessage('O nome não pode ser vazio!'),
    body("produtoValor").notEmpty().withMessage('O nome não pode ser vazio!'),
    body("produtoCategoria").notEmpty().withMessage('O nome não pode ser vazio!'),
    body("produtoDescricao").notEmpty().withMessage('O nome não pode ser vazio!'),
    body("produtoQuantidade").notEmpty().withMessage('O nome não pode ser vazio!'),
    body("produtoConsole").notEmpty().withMessage('O nome não pode ser vazio')

]; //Validar informações do formulario

router.post('/createproduct',upload.single('imgJogo'),validacoes,logDBMiddleware,productController.create);

// Rotas para visualização e atualização de produtos

router.get('/productform/update/:id', productController.directToUpdate);
router.put('/productform/update/:id',productController.update);

router.get('/product/view',productController.view);

router.delete('/product/deletar/:id', productController.destroy);


module.exports=router;