const usedProductController = {
    usedProducts:(req,res)=>{
        return res.render('usedPage'); // /produtosusados
    },
    createBudget:(req, res)=>{
        console.log(req.body)
        return res.send('anyText')
    }
}
module.exports=usedProductController;
