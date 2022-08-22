const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const db = require('../models');
const { password } = require('../configs/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const usuarioJson = path.join('usuarios.json');

const userController = {
    userName:(req,res)=>{
        return res.render('userPanel', {user:req.session.user}); // /usuario
    },
    
    login:(req,res)=>{
        return res.render('login'); // /entrar
    },

    listar: async (req,res)=>{  // no painel de admin
        try{
        const users = await db.Usuarios.findAll({
            raw: true
        })
        console.log(users)
        res.render('users/listUsers', {users})}
        catch(err){
            console.log(err)
        }
        
    },

    
    directToEdit: async (req,res)=>{  // no painel de admin
        try{
        const {id} = req.params;

        const user = await db.Usuarios.findByPk(id);
        res.render('users/editUsers', {user})
        }
        catch(err){
            console.log(err)
        }
    },

    
    formLogin:(req,res)=>{
        return res.render('formLogin')
    },


    accesRegisterdB:(req,res)=>{
        return res.render('users/regUsers')
    },

    registerDb: async(req,res)=>{
        try{
        const {nome, email, password} = req.body;
        let senhaCriptografada = bcrypt.hashSync(password, 10)
        console.log({nome, email, password, senhaCriptografada})
        const result = await db.Usuarios.create({
            nome,
            email,
            senha:senhaCriptografada
        });
        console.log('olaola', result)
        return res.redirect("/index");
    }
        catch(err){
            console.log(err)
        }
    },

    update: async(req,res)=>{
        try{
        const {id} = req.params;
        const {nome, email, senha} = req.body;

        const result = await db.Usuarios.update({
            nome,
            email,
            senha
        }, {
            where:{
                id:id
            }
        })
        return res.redirect('/entrar/admin/centraladmin/usuario/listar')
    } 
        catch(err){
            console.log(err)
        }
    },

    destroy: async(req,res)=>{
        try{
        const {id} = req.params;

        const result = await db.Usuarios.destroy({
            where:{
                id:id
            }
        })
        console.log(result);
        return res.redirect('/entrar/admin/centraladmin/usuario/listar')
    }
        catch(err){
            console.log(err)
        }
    },

    loginUser: async (req,res)=>{
        const {email, password, logado} = req.body;

        const user = await db.Usuarios.findOne({
            where: {
                email
            }
        })

        if(!user){
            return res.send('Usuário não encontrado')
        }
        const compare = bcrypt.compareSync(password, user.senha);
        console.log({compare, password, xsenha:user.senha})
        if(compare === false){
            return res.send('Senha Inválida')
        }

        req.session.user = user
        

        if(logado != undefined){
            res.cookie('logado', user.email, {maxAge: 600000}) // cookie
        }

        return res.redirect('/usuario')
    },

    AcessAdmin: (req,res)=>{
        return res.render('admin/logAdmin')
    },
    
    loginAdmin: async (req,res)=>{
        try{
        const {email, password} = req.body;
        const admin = await db.Usuarios.findOne({
            where:{
                email: email
            }
        })
        if(!admin){
            return res.send('Login de administrador não encontrado!')
        }
        console.log(admin, 'fdsafdsfsfsdfsf')
        const adminPassword = bcrypt.compareSync(password, admin.senha)
        if(!adminPassword){
            return res.send('Senha de administrador inválida')
        }
        
        return res.render('admin/centralAdmin')
    }
    catch(err){
        console.log(err)
    }
    }
}


module.exports = userController;

