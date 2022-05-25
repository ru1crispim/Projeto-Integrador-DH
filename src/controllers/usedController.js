const usedProductController = {
    usedProducts:(req,res)=>{
        res.render('usedPage');
    },
    createBudget:(req, res)=>{
        console.log(req.body)
        return res.send('anyText')
    }
}
module.exports=usedProductController;
