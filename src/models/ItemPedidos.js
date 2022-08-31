module.exports = (sequelize, DataType) =>{
    const ItemPedidos = sequelize.define('ItemPedidos',{
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantidade: DataType.INTEGER,
        valor_unitario: DataType.FLOAT,
        valor_total: DataType.FLOAT,
        produto_id: DataType.INTEGER,
        pedido_id: DataType.INTEGER
    },{
        timestamps: false
    }) 
    //     ItemPedidos.associate = (models) => {
    //         ItemPedidos.belongsTo(models.Pedidos)
    //         ItemPedidos.belongsTo(models.Produtos)
    // }
    return ItemPedidos
}