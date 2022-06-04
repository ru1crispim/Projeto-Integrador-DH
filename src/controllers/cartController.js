const cartController = {
    cart:(req,res)=>{
        return res.render('cart'); // /carrinho
    },
    orderCompletion:(req,res)=>{
        return res.render('orderCompletion'); //  /meupedido
    }
}
module.exports = cartController;