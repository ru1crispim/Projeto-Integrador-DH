module.exports = (sequelize, DataType) => {
    const Pedidos = sequelize.define('Pedidos', {
        id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
            valor_total: DataType.FLOAT,
            endereco_cobranca: DataType.STRING,
            endereco_entrega: DataType.STRING,
            codigo_status: true
    },{
        timestamps: false
    })
        Pedidos.associate = (models) => {
            Pedidos.hasMany(models.ItemPedido,{
            foreignKey: 'Pedidos_id'
        })
    }      
    return Pedidos;
}