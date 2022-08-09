module.exports = (sequelize, DataType) =>{
    const StatusProdutos = sequelize.define('StatusProdutos', {
        id: {
           type: DataType.INTEGER,
           primaryKey: true,
           autoIncrement: true
        },
        cod_status: DataType.INTERGER,
        descricao: DataType.STRING
    })

    return StatusProdutos
}