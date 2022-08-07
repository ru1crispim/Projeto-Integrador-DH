const fs = require('fs')
const path = require('path')
const db = require('../models')

const cookieLogin = async (req, res, next)=>{
    if(req.cookies.logado != undefined && req.session.user == null || undefined){
        let email = req.cookies.logado;
        let user = await db.Usuarios.findOne({
            where: {
                email: email
            }
        })
        console.log(user)
        if(user.email == email){
            req.session.user = user
        }
    }
    next();

}

module.exports = cookieLogin;