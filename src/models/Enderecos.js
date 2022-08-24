const Clientes = require("./Clientes")

module.exports = (sequelize, DataType)=>{
    const Enderecos = sequelize.define('Enderecos',{
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        cep: DataType.STRING,
        endereco: DataType.STRING,
        numero: DataType.INTEGER,
        complemento: DataType.STRING,
        bairro: DataType.STRING,
        cidade: DataType.STRING,
        estado: DataType.STRING,
        referencia: DataType.STRING,
        pedidos_id: DataType.INTEGER
    },{
        timestamps: false   
    }) 
        Enderecos.associate = (models) => {
            Enderecos.belongsTo(models.Clientes)
            Enderecos.belongsTo(models.Pedidos)
        }
    return Enderecos
    }