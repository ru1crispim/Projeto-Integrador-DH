const fs = require('fs');
const path = require('path');

const usuarioJson = path.join('usuarios.json');

const userController = {
    userName:(req,res)=>{
        res.render('userPanel');
    },
    login:(req,res)=>{
        res.render('login'); // atributo para logar no site
    },
    formLogin:(req,res)=>{
        return res.render('formLogin')
    },

    cadastro:(req,res)=>{
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
        let dadosJson = JSON.stringify({nome, sobrenome, birthdate,sexo, CPF, number, CEP, endereco,state, enderecoNumber, complemento, bairro, cidade,referencia,email,password})
        fs.writeFileSync(usuarioJson, dadosJson)
        res.redirect('/index')
    }
}

module.exports = userController;

