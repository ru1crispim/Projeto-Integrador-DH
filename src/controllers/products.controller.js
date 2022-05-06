const Product =require("../models/Products.model")
module.exports = {
    create: (req,res)=>{
        const product= Product;
        product.create("Elden Ring",250.99,"PS5")
        const myList=product.list()
    res.send(myList);
    },
    delete: (req,res)=>{
        res.send("deletando um produto");
    },
    update: (req,res)=>{
        res.send("alterando um produto");
    },
}
