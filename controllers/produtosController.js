const produtoController = {
    criarProduto: (req,res)=>{
    res.send("Criando um produto");
    },
    deletarProduto: (req,res)=>{
        res.send("deletando um produto");
    },
    alterarProduto: (req,res)=>{
        res.send("alterando um produto");
    },
}

module.exports = produtoController