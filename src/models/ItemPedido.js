module.exports = (sequelize, DataType) =>{
    const ItemPedido = sequelize.define('ItemPedido',{
        id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        }
    },{
        timestamps: false
    }) 
        ItemPedido.associate = (models) => {
            ItemPedido.belongsTo(models.Pedido)
    }
    return ItemPedido
}