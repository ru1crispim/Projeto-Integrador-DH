const indexController = {
    index:(req,res)=>{
        return res.render('index'); // /index
    },

    indexDarkMode: (req,res)=>{
        return res.render('index2')
    }
}

module.exports=indexController;