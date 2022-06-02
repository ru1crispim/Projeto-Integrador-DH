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
<<<<<<< HEAD

module.exports = userController;
=======
module.exports=userController;
>>>>>>> 1f512d47e6a4bc2e5fca45bc1680ff7e444a3c40
