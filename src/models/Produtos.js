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
        valor:DataType.DECIMAL,
        descricao: DataType.STRING,
        quantidade: DataType.INTEGER,
        console: DataType.STRING,
        imagem:DataType.STRING
    }, {
        
        timestamps:false 
    })
    return Produtos; 
}