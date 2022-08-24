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
        data_nascimento:DataType.DATE,
        usuario_id: DataType.INTEGER,
        endereco_id: DataType.INTEGER,
    },{
        
        timestamps:false 
    }) 
        Clientes.associate = (models) => {
            Clientes.hasOne(models.Usuarios,{
                foreignKey: 'id'
            })        
            Clientes.hasMany(models.Enderecos,{
                foreignKey: 'clientes_id'
            })
            Clientes.hasMany(models.Pedidos,{
                foreignKey: 'clientes_id'
            })
        }       

    return Clientes; 
}