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

