module.exports = (sequelize, DataType) =>{
    const ItemPedidos = sequelize.define('ItemPedidos',{
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },{
        timestamps: false
    }) 
        ItemPedidos.associate = (models) => {
            ItemPedidos.belongsTo(models.Pedidos)
            ItemPedidos.belongsTo(models.Produtos)
    }
    return ItemPedidos
}