module.exports = (sequelize, DataType) =>{
    const ItemPedido = sequelize.define('ItemPedido',{
        id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        }
    },{
        timestamps: false
    }) //relacionamento com pedidos_id, produtos_id, produtos_pedidos_id
    return ItemPedido
}