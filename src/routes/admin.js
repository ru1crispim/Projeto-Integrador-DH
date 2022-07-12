const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const {body} = require('express-validator');

const validacoes = [
    body("nome").notEmpty().withMessage(),
    body("password").notEmpty().withMessage()
];

router.get('/entrar/admin', adminController.AcessAdmin);
router.get('/entrar/admin/centralAdmin', adminController.loginAdmin);


// router.post('/entrar/admin', validacoes, adminController.register)

module.exports = router;