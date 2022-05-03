const express= require("express");
const rotasProdutos = require("./routes/rotasProdutos");
let app = express();


app.get("/",(req,res)=>res.send("Olá Mundo!"));
app.get("/contatos",(req,res)=>res.send("Pagina contatos"));

app.use("/produtos", rotasProdutos);

// Criando um servidor
app.listen(4000,()=>console.log("Servidor rodando na porta 4000"))