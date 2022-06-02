const fs = require('fs');
const path = require('path');
const produtosJson = path.join('produtos.json')
// const Product = require('../models/Products.model');

const productController = {
    products:(req,res)=>{
        res.render('product');
    },
    create:(req,res)=>{
        let {produtoNome,produtoCategoria,produtoValor,produtoUnidade,produtoQuantidade}=req.body;
        let dadosJson = JSON.stringify({produtoNome,produtoCategoria,produtoValor,produtoUnidade,produtoQuantidade});
        fs.appendFileSync(produtosJson,dadosJson);
        res.render('successfullProductRegistration');
    },
    
    update: (req,res)=>{
               
        // let {nomeProdutoCadastrado,categoriaProdutoCadastrado,valorProdutoCadastrado,unidadeProdutoCadastrado,saldoProdutoCadastrado}=req.body;
        res.render('successfullProductChange');
        }


    }


module.exports=productController;
