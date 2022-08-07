const fs = require('fs');
const path = require('path');
const produtosJson = path.join('produtos.json')
// const Product = require('../models/Products.model');
const {validationResult}= require('express-validator');
const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const productController = {

    viewProducts: async (req,res)=>{
        let {page=1} = req.query;
        try{
            const {count:total, rows:products} = await db.Produtos.findAndCountAll({
                limit: 5,
                offset: (page - 1) * 5
            })
            let totalPages = Math.round(total / 5);
            console.log(totalPages)
            res.render('product', {products, totalPages});
        }
        catch(err){
            console.log(err);
        }
    },

    viewCategories: async (req,res)=>{
        try{
            const products = await db.Produtos.findAll({
                raw: true
            });
            let categories = [];
            // for(var i=0; i <products.length; i++){
            //     if(products[i].categoria == 'rpg'){
            //         categories.push(products[i])
            //     }
            // }
            console.log(categories)
            return res.render('productCategories', {products})
        }
        catch(err){
            console.log(err)
        }
    },

    viewAdmin: async (req,res)=>{
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

    productDetail: async (req,res)=>{
        try{
            let {id} = req.params;

            let product = await db.Produtos.findOne({
                where:{
                    id
                }
            })
            return res.render('productDetail', {product})
        }
        catch(err){
            console.log(err)
        }
    },

    search: async (req,res)=>{
        try{
            
            let {page=1, key} = req.query;
            const {count:total, rows:products} = await db.Produtos.findAndCountAll({
                limit: 5,
                offset: (page - 1) * 5,
                where:{
                    nome:{
                        [Op.like]:`%${key}%`
                    }
                }
            })
            let totalPages = Math.round(total / 5);
            return res.render('product', {products, totalPages})
        }catch(err){
        console.log(err)
        }
    },

    offers: async (req,res)=>{
        try{


            return res.render('productOffers')
        }
        catch(err){
            console.log(err);
        }
    },

    create:async (req,res,next)=>{
        try{
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors.mapped());
            return res.render('productFormRegistration',{errors:errors.mapped()});
        }
        if(!req.file){
            res.send("Você deve enviar um arquivo!");
        }
        const {originalname, filename} = req.file
        console.log({originalname, filename});
        const {produtoNome, produtoValor, produtoCategoria, produtoDescricao, produtoQuantidade,produtoConsole} = req.body;

        const result = await db.Produtos.create({
            nome: produtoNome,
            valor: produtoValor,
            categoria: produtoCategoria,
            descricao: produtoDescricao,
            quantidade: produtoQuantidade,
            console: produtoConsole,
            imagem: filename
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

    offers: (req,res)=>{
        
    }

}


module.exports=productController;
