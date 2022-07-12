const fs = require('fs');
const path = require('path');
const bcrypt = require ('bcrypt')
const {validationResult} = require('express-validator');



const adminJson = path.join('administrador.json');



const adminController = {
    AcessAdmin: (req,res)=>{
        return res.render('admin/logAdmin')
    },
    

    // register: (req,res) =>{
    //     const {nome,password} = req.body;

    //     const error = validationResult(req);
    //     console.log(error);
        
    //     if(!error.isEmpty()){
    //         return res.render('admin/centralAdmin', {error:error.mapped()});
    //     }

    //     console.log(password)
    //     let senhaCriptografada = bcrypt.hashSync('password', 10);

    //     let dadosJson = JSON.stringify({nome, password:senhaCriptografada})
    //     fs.writeFileSync(adminJson, dadosJson);

    //     return res.render('admin/logAdmin')
    // },


    loginAdmin: (req,res)=>{
        const {nome, password} = req.body;

        // const admin = await db.Administradores.findByPk(id);
        
        
        return res.render('admin/centralAdmin')
    }
}

module.exports = adminController;