const userController = {
    userName:(req,res)=>{
        res.render('userPanel');
    },
    login:(req,res)=>{
        res.render('login'); // atributo para logar no site
    },
    formLogin:(req,res)=>{
        res.render('formLogin');
    }
}

module.exports = userController;