const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {validationResult} = require('express-validator');

const usuarioJson = path.join('usuarios.json');

const userController = {
    userName:(req,res)=>{
        return res.render('userPanel'); // /usuario
    },
    
    login:(req,res)=>{
        return res.render('login'); // /entrar
    },
    
    formLogin:(req,res)=>{
        return res.render('formLogin',)
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
        password
        } = req.body; 
        // console.log(req.body)

        let senhaCriptografada = bcrypt.hashSync('password', 10);

        let dadosJson = JSON.stringify({nome, sobrenome, birthdate,sexo, CPF, number, CEP, endereco,state, enderecoNumber, complemento, bairro, cidade,referencia,email,password:senhaCriptografada})
        fs.writeFileSync(usuarioJson, dadosJson)

        // validar pelo express-validator
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            console.log(errors.mapped());
            return res.render('userRegistered', {errors:errors.mapped()})
        } 
    },
    
    loginUser:(req,res)=>{
        let {email, password} = req.body;

        // let usuarioSalvo = fs.readFileSync(usuarioJson, {encoding: 'utf-8'});
        // usuarioSalvo = JSON.parse(usuarioSalvo);

        // if(email != usuarioSalvo.email){
        //     return res.send('Usuário Inválido!')
        // }

        // if(!bcrypt.compareSync(password, usuarioSalvo.password)){
        //     return res.send('Senha Inválida!') // Não está funcionando
        // }

        return res.redirect('/usuario',)}
    }


module.exports = userController;

