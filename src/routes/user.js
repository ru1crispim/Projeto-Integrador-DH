const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');
const logDBMiddleware = require('../middlewares/logDB');
const {body} = require('express-validator');

//express-validator
const validacoes = [
    body("nome").isEmpty().withMessage(),
    body("sobrenome").isEmpty().withMessage(),
    body("birthdate").isEmpty().withMessage(),
    body("sexo").isEmpty().withMessage(),
    body("CPF").isEmpty().withMessage(),
    body("number").isEmpty().withMessage(),
    body("CEP").isEmpty().withMessage(),
    body("endereco").isEmpty().withMessage(),
    body("state").isEmpty().withMessage(),
    body("enderecoNumber").isEmpty().withMessage(),
    body("complemento").isEmpty().withMessage(),
    body("bairro").isEmpty().withMessage(),
    body("cidade").isEmpty().withMessage(),
    body("referencia").isEmpty().withMessage(),
    body("email").isEmail().isEmpty().withMessage('Você deve digitar um email válido'),
    body("password").isLength({min: 5}).isEmpty().withMessage('A senha deve conter no mínimo 5 caracteres')
];
//express-validator

//multer
// const multerDiskStorage = multer.diskStorage({
//     destination: function(req,file,cb){
//         const folder = path.join(__dirname, '../public/img/avatarUsers');
//         cb(null, folder);
//     },
//     filename: function(req,file,cb){
//         const imageName = Date.now() + file.originalname;
//         cb(null, imageName);
//     }
// });
// const upload = multer({storage:multerDiskStorage});
//multer


router.get('/usuario',userController.userName);

router.get('/entrar',  userController.login) // carrega a rota entrar , com a view login
router.get('/formlogin',validacoes, userController.formLogin);
router.post('/formLogin/cadastrado', validacoes, userController.register);
router.post('/usuariologado', userController.loginUser);



router.get('/entrar', userController.login); // carrega a rota entrar , com a view login

// router.get('/cadastrar',userController.cadastro);

module.exports = router;