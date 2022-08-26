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
            const userEmail = req.cookies['logado']
            const KEY_STORAGE = '@games:cart';
            let cart = req.cookies[KEY_STORAGE];
            if(!cart){
            cart='[]';
            }
            console.log(cart, 'teste');
            cart = JSON.parse(cart);
            
            const total = cart.reduce((acc,current)=>acc+Number(current.valor) * Number(current.amount),0)
            const cliente = await db.Clientes.findOne({
                where: {
                    email: userEmail,
                }
            })
            const pedido = await db.Pedidos.create({
                valor_total: total,
                codigo_status: 'sucesso!',
                cliente_id: cliente.id,
                endereco_cobranca: 1,
                endereco_entrega: 3
            })
            const products = cart.map(item => ({
                produto_id: item.id,
                pedido_id: pedido.id,
                quantidade: item.amount,
                valor_unitario: item.valor,
                valor_total: Number(item.amount) * Number(item.valor)                
            }))
            const result = await db.ItemPedidos.bulkCreate(products)
            console.log(products, 'algumacoisa')
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