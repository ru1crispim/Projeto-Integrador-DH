const { json } = require('express');
const db = require('../models');

const cartController = {
    
    cart:(req,res)=>{
        const KEY_STORAGE = '@games:cart';
            let cart = req.cookies[KEY_STORAGE];
            if(!cart){
            cart='[]';
        }
        console.log(cart, 'teste');
        cart = JSON.parse(cart);
        
        const cartFormatted = cart.map(item=>({
            ...item,
            subTotal:item.valor * item.amount
        }))
        const total = cartFormatted.reduce((acc,current)=>acc+Number(current.subTotal),0)
        res.render('cart',{
            cart:cartFormatted,
            total
  });
    },

    sendToServer:async(req,res)=>{
        try{
            const KEY_STORAGE = '@games:cart';
            let cart = req.cookies[KEY_STORAGE];
            if(!cart){
            cart='[]';
            }
            console.log(cart, 'teste');
            cart = JSON.parse(cart);
            const products = cart.map(item => ({
                id: item.id,
                quantidade: item.quantidade,
                preco: item.preco
            }))
            
            const result = await db.Compras.bulkCreate(products)

            return res.redirect('/index')
        }
        catch(err){
            console.log(err)
        }
    },

    orderCompletion:(req,res)=>{
        return res.render('orderCompletion'); //  /meupedido
    }
}
module.exports = cartController;