module.exports = (sequelize, DataType) => {
    const Pedidos = sequelize.define('Pedidos', {
        id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
            numero_pedido: DataType.INTERGER,
            tipo_pagamento: DataType.STRING,
            valor_total: DataType.FLOAT,
            endereco: DataType.STRING
    },{
        timestamps: false
    })
    return Pedidos;
}