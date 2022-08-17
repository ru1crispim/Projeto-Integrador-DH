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
    }) //relacionamento com clientes_id, clientes_usuarios_id, endereco_id
    return Pedidos;
}