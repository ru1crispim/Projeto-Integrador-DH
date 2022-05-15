const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/usuario',userController.userName);

module.exports=router;
