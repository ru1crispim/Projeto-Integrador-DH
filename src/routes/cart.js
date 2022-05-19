const express = require("express");
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/carrinho',cartController.cart);
router.get('/meuPedido', cartController.orderCompletion); // carrega a rota de acompanhamento do pedido, com a view orderCompletion

module.exports=router;