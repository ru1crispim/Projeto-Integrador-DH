const fs = require('fs');
const path = require('path');
const produtosJson = path.join('produtos.json')
// const Product = require('../models/Products.model');

const productController = {
    products:(req,res)=>{
        return res.render('product'); // /produtos
    },
    create:(req,res)=>{
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
