const fs = require('fs')
const path = require('path')
const cookieLogin = (req, res, next)=>{
    if(req.cookies.logado != undefined && req.session.usuario == null || undefined){
        let email = req.cookies.logado;
        let usuario = JSON.parse(fs.readFileSync(path.join('usuarios.json'), {encoding:'utf-8'}))

        if(usuario.email == email){
            req.session.usuario = usuario
        } //login de usuário recuperando do arquivo.json
    }
    next();

}

module.exports = cookieLogin;