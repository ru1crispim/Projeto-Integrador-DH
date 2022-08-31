module.exports = (sequelize, DataType) => {
    const Pedidos = sequelize.define('Pedidos', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        valor_total: DataType.FLOAT,
        endereco_cobranca: DataType.STRING,
        endereco_entrega: DataType.STRING,
        codigo_status: DataType.STRING,
        cliente_id: DataType.INTEGER
    },{
        timestamps: false
    })
    //     Pedidos.associate = (models) => {
    //         Pedidos.hasMany(models.ItemPedidos,{
    //         foreignKey: 'Pedidos_id'
    //     })
    // }      
    return Pedidos;
}