module.exports = (sequelize, DataType) =>{
    const Pagamentos = sequelize.define('Pagamentos', {
        id:{
            type: DataType.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_pagamento: DataType.STRING,
        quantidade_vezes: DataType.INTERGER,
        valor: DataType.FLOAT
    },{
        timestamps: false
    })
    return Pagamentos;
}