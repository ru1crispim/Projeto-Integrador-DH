module.exports = (sequelize, DataType)=>{
    const Endereços = sequelize.define('Endereços',{
        id:{
            type:DataType.INTEGER, 
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        cep:DataType.STRING,  
        endereco: DataType.STRING,
        numero:DataType.INTEGER,
        complemento: DataType.STRING,
        bairro: DataType.STRING,
        cidade: DataType.STRING,
        estado: DataType.STRING,
        referencia: DataType.STRING
    }, {
        
        timestamps:false 
    })
    return Endereços; 
}
