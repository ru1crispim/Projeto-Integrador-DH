module.exports = (sequelize, DataType)=>{
    const Produtos = sequelize.define('Produtos',{
        id:{
            type:DataType.INTEGER,  // que tipo ele é
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        nome:DataType.STRING,   
        categoria: DataType.STRING,
        valor:DataType.INTEGER,
        descricao: DataType.STRING,
        quantidade: DataType.INTEGER,
        console: DataType.STRING
    }, {
        
        timestamps:false 
    })
    return Produtos; 
}