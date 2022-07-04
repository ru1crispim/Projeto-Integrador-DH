const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');
const auth = require('../middlewares/auth')
const logDBMiddleware = require('../middlewares/logDB');
const {body} = require('express-validator');


//express-validator
const validacoes = [
    body("nome").notEmpty().withMessage(),
    body("sobrenome").notEmpty().withMessage(),
    body("birthdate").notEmpty().withMessage(),
    body("sexo").notEmpty().withMessage(),
    body("CPF").notEmpty().withMessage(),
    body("number").notEmpty().withMessage(),
    body("CEP").notEmpty().withMessage(),
    body("endereco").notEmpty().withMessage(),
    body("state").notEmpty().withMessage(),
    body("enderecoNumber").notEmpty().withMessage(),
    body("complemento").notEmpty().withMessage(),
    body("bairro").notEmpty().withMessage(),
    body("cidade").notEmpty().withMessage(),
    body("referencia").notEmpty().withMessage(),
    body("email").isEmail().notEmpty().withMessage('Você deve digitar um email válido'),
    body("password").isLength({min: 5}).notEmpty().withMessage('A senha deve conter no mínimo 5 caracteres'),
    body("repeatpassword").isLength({min: 5}).notEmpty().withMessage('A senha deve conter no mínimo 5 caracteres')
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
router.get('/formlogin', userController.formLogin);
router.post('/formLogin/cadastrado', validacoes, userController.register);
router.post('/usuariologado', userController.loginUser);

router.get('/usuario/listar', userController.listar);

router.get('/usuario/editar/:id', userController.directToEdit);
router.put('/usuario/editar/:id', userController.update);

router.get('/usuario/cadastrar', userController.accesRegisterdB);
router.post('/usuario/cadastrar', userController.registerDb);

router.delete('/usuario/deletar/:id', userController.destroy)

router.get('/entrar', userController.login); // carrega a rota entrar , com a view login

// router.get('/cadastrar',userController.cadastro);

module.exports = router;