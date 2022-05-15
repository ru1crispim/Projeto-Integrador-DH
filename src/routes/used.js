const express = require("express");
const router = express.Router();
const usedController = require('../controllers/usedController');

router.get('/used',usedController);

module.exports=router;