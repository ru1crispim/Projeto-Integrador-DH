const express = require("express");
const produtoController = require("../controllers/produtosController")
const router = express.Router();

router.get("/criar",produtoController.criarProduto);
router.get("/deletar",produtoController.deletarProduto);
router.get("/alterar",produtoController.alterarProduto);


module.exports=router;