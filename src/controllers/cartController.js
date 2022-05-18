const cartController = {
    cart:(req,res)=>{
        res.render('cart');
    },
    orderCompletion:(req,res)=>{
        res.render('orderCompletion'); // página de acompanhamento de pedido
    }
}
module.exports = cartController;