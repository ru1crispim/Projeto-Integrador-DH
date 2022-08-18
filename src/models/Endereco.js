const Clientes = require("./Clientes")

module.exports = (sequelize, DataType)=>{
    const Endereco = sequelize.define('Endereco',{
        id:{
            type: DataType.INTERGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        cep: DataType.STRING,
        endereco: DataType.STRING,
        numero: DataType.INTERGER,
        complemento: DataType.STRING,
        bairro: DataType.STRING,
        cidade: DataType.STRING,
        estado: DataType.STRING,
        referencia: DataType.STRING
    },{
        timestamps: false   
    }) 
        Endereco.associate = (models) => {
            Endereco.hasOne(models.Pedidos, {
                foreignKey: 'Endereco_id'
            })
        Endereco.belongsTo(models.Pedidos)

        Endereco.belongsTo(models.Clientes)
        }
    return Endereco
    }