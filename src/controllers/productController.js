const fs = require('fs');
const path = require('path');
const produtosJson = path.join('produtos.json')
// const Product = require('../models/Products.model');
const {validationResult}= require('express-validator');

const productController = {
    products:(req,res)=>{
        res.render('product');
    },
    create:(req,res)=>{
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors.mapped());
            return res.render('productFormRegistration',{errors:errors.mapped()});
        }
        if(!req.file){
            res.send("Você deve enviar um arquivo!");
        }
        let {produtoNome,produtoCategoria,produtoValor,produtoUnidade,produtoQuantidade}=req.body;
        let dadosJson = JSON.stringify({produtoNome,produtoCategoria,produtoValor,produtoUnidade,produtoQuantidade});
        fs.writeFileSync(produtosJson,dadosJson);
        res.render('successfullProductRegistration');
    },
    
    update: (req,res)=>{
               
        // let {nomeProdutoCadastrado,categoriaProdutoCadastrado,valorProdutoCadastrado,unidadeProdutoCadastrado,saldoProdutoCadastrado}=req.body;
        res.render('successfullProductChange');
    },
    view: (req,res)=>{
        let registeredProduct = fs.readFileSync('produtos.json','utf-8');
        let registeredProductJson = JSON.parse(registeredProduct);
        console.log(registeredProductJson);
        res.render('viewProduct',{produtoJson:registeredProductJson})
    }



    }


module.exports=productController;
