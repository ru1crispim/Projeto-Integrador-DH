const Users = require('../models/Users.model')

const userController = {
    userName:(req,res)=>{
        res.render('userPanel');
    },
    login:(req,res)=>{
        res.render('login'); // atributo para logar no site
    },

    cadastro:(req,res)=>{
        const newUser = new Users() //criando instancia por meio da model
        newUser.create(req.body)
        res.render('cadastroUsuario'); 
},

    formLogin:(req,res)=>{
        res.render('formLogin');
}
}

module.exports = userController;