module.exports = (sequelize, DataType)=>{
    const Compras = sequelize.define('Compras',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        nome:DataType.STRING,
        valor:DataType.INTEGER
    }, {
        
        timestamps:false 
    })
    return Compras; 
}
