const products =[]
const Product={
    // constructor(name, price, plattform) {
    //     this.name=name;
    //     this.price=price;
    //     this.plattform=plattform;    
    // }
    create(name,price,plattform){
        products.push({
            name,
            price,
            plattform,
        })
    },
    list(){
        return products;
    }
}

module.exports=Product

