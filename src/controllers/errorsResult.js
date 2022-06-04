const { validationResult } = require('express-validator');
module.exports = {
    viewCadastro: (req, res) => {
        return res.render('index'); // /index
    },
    salvarCadastro: (req, res) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            console.log(errors.mapped()); 
            return res.render('index', { errors: errors.mapped() }); //Para identificar cada tipo de erro   
        }        
        if(!req.file){
            return res.send("Você deve enviar um arquivo.");
        }
        return res.send("Deu certo!");
    }
}