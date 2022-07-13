const fs = require('fs');
const path = require('path');
const produtosJson = path.join('produtos.json')
// const Product = require('../models/Products.model');
const {validationResult}= require('express-validator');
const db = require('../models');

const productController = {
    products:(req,res)=>{
        return res.render('product'); // /produtos
    },

    view: async (req,res)=>{
            try{
                const products = await db.Produtos.findAll({
                    raw: true,
                })
                console.log(products);
                res.render('viewProduct', {products});
            }
            catch(err){
                console.log(err);
            }
        // let registeredProduct = fs.readFileSync('produtos.json','utf-8');
        // let registeredProductJson = JSON.parse(registeredProduct);
        // console.log(registeredProductJson);
        // res.render('viewProduct',{produtoJson:registeredProductJson})
    },


    list: async (req,res)=>{
        try{
            const products = await db.Produtos.findAll({
                raw:true
            })
            console.log(products);
            return res.render('productsList')
        }
        catch(err){
            console.log(err);
        }
    },

    create:async (req,res)=>{
        try{
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors.mapped());
            return res.render('productFormRegistration',{errors:errors.mapped()});
        }
        if(!req.file){
            res.send("Você deve enviar um arquivo!");
        }
        // let dadosJson = JSON.stringify({produtoNome,produtoCategoria,produtoValor,produtoUnidade,produtoQuantidade});
        // fs.writeFileSync(produtosJson,dadosJson);

        const {produtoNome, produtoValor, produtoCategoria, produtoDescricao, produtoQuantidade,produtoConsole} = req.body;

        const result = await db.Produtos.create({
            nome: produtoNome,
            valor: produtoValor,
            categoria: produtoCategoria,
            descricao: produtoDescricao,
            quantidade: produtoQuantidade,
            console: produtoConsole
        });

        res.render('successfullProductRegistration');
        }
        catch(err){
            console.log(err);
        }
    },

    directToUpdate: async (req,res)=>{
        try{
        const {id} = req.params;

        const products = await db.Produtos.findByPk(id);
        res.render('productFormUpdate', {products})
        }
        catch(err){
            console.log(err)
        }
    },
    
    update: async (req,res)=>{
        try{
            const{id} = req.params;
            
            const {nomeProdutoCadastrado, valorProdutoCadastrado, categoriaProdutoCadastrado, descricaoProdutoCadastrado, saldoProdutoCadastrado, consoleProdutoCadastrado} = req.body;

            const result = await db.Produtos.update({
            nome: nomeProdutoCadastrado,
            valor: valorProdutoCadastrado,
            categoria: categoriaProdutoCadastrado,
            descricao: descricaoProdutoCadastrado,
            quantidade: saldoProdutoCadastrado,
            console: consoleProdutoCadastrado
            }, {
                where:{
                    id: id
                }
            })
            res.redirect('/product/view');
        }
        catch(err){
            console.log(err);
        }
    },

    destroy: async(req,res)=>{
        try{
        const {id} = req.params;

        const result = await db.Produtos.destroy({
            where:{
                id:id
            }
        })
        console.log(result);
        return res.redirect('/product/view')
    }
        catch(err){
            console.log(err)
        }
    },


    }


module.exports=productController;
