const express = require("express");
const router = express.Router();
const indexController = require('../controllers/indexController');
const { body } = require("express-validator");

const logDBMiddleware = require('../middlewares/logDB');
// const validateRegister = {
//     body('name')
//         .notEmpty()
//         .withMessage('Deve preencher o nome')
//         .bail()
//         .isLenght({ min: 5 })
//         .withMessage('O nome deve ser maior'),
//     body('email')
//         .isMail()
//         .notEmpty()
//         .withMessage('Deve preencher o email')
//         .bail()
//         .withMessage('Deve preencher com um email válido'),
//     body('password')
//         .notEmpty()
//         .withMessage('Deve preencher a senha')
//         .bail()
//         .isLenght({ min: 8 })
//         .withMessage('A senha deve ser maior')
    //para cada "name" do campo body
// }

//router.post('/', validateRegister, usedController.processRegister);

router.get('/index',indexController.index);

module.exports=router;
