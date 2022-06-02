const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

const logDBMiddleware = require('../middlewares/logDB');

router.get('/usuario',userController.userName);
<<<<<<< HEAD
router.get('/entrar', userController.login) // carrega a rota entrar , com a view login
router.get('/formlogin', userController.formLogin);
=======
router.get('/entrar', userController.login); // carrega a rota entrar , com a view login
>>>>>>> 1f512d47e6a4bc2e5fca45bc1680ff7e444a3c40

module.exports = router;