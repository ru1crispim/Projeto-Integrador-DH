const express = require("express");
const productController = require("../controllers/products.controller")
const router = express.Router();

router.post("/create",productController.create);
router.delete("/delete",productController.delete);
router.put("/update",productController.update);

module.exports=router;