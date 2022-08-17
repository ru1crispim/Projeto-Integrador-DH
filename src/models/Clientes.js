module.exports = (sequelize, DataType)=>{
    const Clientes = sequelize.define('Clientes',{
        id:{
            type:DataType.INTEGER,  // que tipo ele é
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        nome:DataType.STRING,  
        sobrenome: DataType.STRING,
        email:{
            type:DataType.STRING,
            allowNull:false  
        },
        cpf: DataType.INTEGER,
        telefone: DataType.INTEGER,
        data_nascimento:DataType.DATE
    },{
        
        timestamps:false 
    }) //relacionamento com usuario_id
    return Clientes; 
}
