const Pedidos = require("./Pedidos")

module.exports = (sequelize, DataType)=>{
    const Enderecos = sequelize.define('Endereco',{
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
        Enderecos.associate = (models) => {
            Enderecos.hasOne(models.Pedidos, {
                foreignKey: 'id'
            })
        Enderecos.belongsTo(Pedidos)
        }
    
    }
    return Enderecos