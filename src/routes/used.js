const express = require("express");
const router = express.Router();
const usedProducts = require('../controllers/usedController');
const upload = require('../configs/multer')
const logDBMiddleware = require('../middlewares/logDB');

router.get('/produtosusados',usedProducts.usedProducts);
router.post('/produtosusados', upload.single("imagem"), usedProducts.createBudget);


module.exports=router;