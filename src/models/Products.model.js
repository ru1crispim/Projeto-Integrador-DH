const myProducts=[];
const uuid = require('uuid');

class Product{
  constructor(nome,valor){
    this.nome = nome;
    this.valor = valor;
  }
  save(){
    myProducts.push({
      nome:this.nome,
      valor:this.valor,
      id: uuid.v4()
    })
    console.log(myProducts)
  }
  list(){
    return myProducts;
  }
  update(id){
    const findIndex = myProducts.findIndex(item => item.id===id);
    if(findIndex<0){
        return "Não encontrado";
    }
    myProducts[findIndex].nome=this.nome
    myProducts[findIndex].valor=this.valor
        return myProducts;
  }    
}

module.exports = Product;