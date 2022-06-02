const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

const logDBMiddleware = require('../middlewares/logDB');

router.get('/usuario',userController.userName);

router.get('/entrar', userController.login) // carrega a rota entrar , com a view login
router.get('/formlogin', userController.formLogin);

router.get('/entrar', userController.login); // carrega a rota entrar , com a view login

router.get('/cadastrar',userController.cadastro);

module.exports = router;