const express= require("express");
const rotasProdutos = require("./src/routes/products.route");
let app = express();


app.get("/",(req,res)=>res.send("Olá Mundo!"));
app.get("/contatos",(req,res)=>res.send("Pagina contatos"));

app.use("/products", rotasProdutos);

app.listen(4000,()=>console.log("Servidor rodando na porta 4000"))