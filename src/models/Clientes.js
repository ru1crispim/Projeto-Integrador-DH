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
    }) 
        Clientes.associate = (models) => {
            Clientes.hasOne(models.Usuarios,{
                foreignKey: 'id'
            })
        }
        Clientes.belongsTo(Usuarios);

        Clientes.associate = (models) => {
            Clientes.hasMany(models.Enderecos,{
                foreignKey: 'id'
            })
        Clientes.belongsToMany(Enderecos, {through:'Pedidos'}) 
        }

        Clientes.associate = (models) => {
            Clientes.hasMany(models.Pedidos,{
                foreignKey: 'id'
            })
        Clientes.belongsToMany(Pedidos, {through: 'Usuarios'}) 
        }


    return Clientes; 
}