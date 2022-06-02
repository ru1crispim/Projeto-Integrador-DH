const userController = {
    userName:(req,res)=>{
        res.render('userPanel');
    },
    login:(req,res)=>{
        res.render('login'); // atributo para logar no site
    },
    cadastro:(req,res)=>{
        res.render('cadastroUsuario'); 
}
}

module.exports=userController;