const Product = require('../models/Products.model');

const productController = {
    products:(req,res)=>{
        res.render('product');
    },
    create:(req,res)=>{
        const name = req.body.nome
        const valor = req.body.valor
        const product = new Product(name, valor) //criar novo produto e mandar para o produto com "p"
        product.save()
        return res.send('produto criado')
    },
    update: (req,res)=>{
        const name = req.body.nome
        const valor = req.body.valor
        const id = req.params.id
        const product = new Product(name, valor) //criar novo produto e mandar para o produto com "p"
        product.update(id)
        return res.send('produto alterado')
    }
}
module.exports=productController;
