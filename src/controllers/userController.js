const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');
const db = require('../models');
// const Usuarios = require('../models/Usuarios');

const usuarioJson = path.join('usuarios.json');

const userController = {
    userName:(req,res)=>{
        return res.render('userPanel'); // /usuario
    },
    
    login:(req,res)=>{
        return res.render('login'); // /entrar
    },

    listar: async (req,res)=>{
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
    
    directToEdit: async (req,res)=>{
        try{
        const {id} = req.params;

        const user = await db.Usuarios.findByPk(id);
        res.render('users/editUsers', {user})
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
        return res.redirect('/usuario/listar')
    } 
        catch(err){
            console.log(err)
        }
    },
    
    formLogin:(req,res)=>{
        return res.render('formLogin')
    },

    register:(req,res)=>{

    let {nome, 
        sobrenome, 
        birthdate, 
        sexo,
        CPF, 
        number, 
        CEP, 
        endereco, 
        state,
        enderecoNumber, 
        complemento, 
        bairro, 
        cidade,
        referencia,
        email,
        password,
        repeatpassword
        } = req.body; 

        
        const errors = validationResult(req);
        console.log(errors)
        if(!errors.isEmpty()){
            // console.log('entrou no if');
            return res.render('formLogin', {errors:errors.mapped()})
        } 
        
        console.log({password})
        let senhaCriptografada = bcrypt.hashSync(password, 10);

        let dadosJson = JSON.stringify({nome, sobrenome, birthdate,sexo, CPF, number, CEP, endereco,state, enderecoNumber, complemento, bairro, cidade,referencia,email,password:senhaCriptografada,repeatpassword:senhaCriptografada})
        fs.writeFileSync(usuarioJson, dadosJson)

        return res.render('userRegistered')
        // validar pelo express-validator
        
    },


    accesRegisterdB:(req,res)=>{
        return res.render('users/regUsers')
    },


    registerDb: async(req,res)=>{
        try{
        const {nome, email, senha} = req.body;
        const result = await db.Usuarios.create({
            nome,
            email,
            senha
        })
        console.log(result)
        return res.redirect("/usuario/listar");
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
        return res.redirect('/usuario/listar')
    }
        catch(err){
            console.log(err)
        }
    },

    
    loginUser:(req,res)=>{
        let {email, password, logado} = req.body;


        let usuarioSalvo = fs.readFileSync(usuarioJson, {encoding: 'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo);

        if(email != usuarioSalvo.email){
            console.log(email, usuarioSalvo.email)
            return res.send('Usuário Inválido!')
        }
        // console.log(bcrypt.compareSync('123456', usuarioSalvo.password))
        // let senhaCerta = '123456'
        // let senhaErrada = 'aaaaaa'
        // const hash = bcrypt.hashSync(senhaCerta, 10)
        // const teste1 = bcrypt.compareSync(senhaCerta, hash)
        // const teste2 = bcrypt.compareSync(senhaErrada, hash)
        // console.log(teste1)
        // console.log(teste2)
        console.log('Estou com os dados', {password, original:usuarioSalvo.password})
        if(!bcrypt.compareSync(password, usuarioSalvo.password)){
            // console.log(bcrypt.hashSync('password', 10), usuarioSalvo.password)
            return res.send('Senha Inválida!') // Não está funcionando
        }
        req.session.usuario = usuarioSalvo

        if(logado != undefined){
            res.cookie('logado',usuarioSalvo.email,{maxAge: 600000}) // cookie
        }

        return res.redirect('/usuario')}
    }


module.exports = userController;

