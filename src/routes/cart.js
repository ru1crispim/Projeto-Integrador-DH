const express = require("express");
const router = express.Router();
const cartController = require('../controllers/cartController');

const logDBMiddleware = require('../middlewares/logDB')

router.get('/carrinho',cartController.cart);
router.post('/carrinho', cartController.sendToServer);
router.get('/minhascompras', cartController.clientOrder); // carrega a rota de acompanhamento do pedido, com a view orderCompletion

module.exports=router;