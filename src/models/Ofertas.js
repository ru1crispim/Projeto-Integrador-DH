/* const { STRING } = require("sequelize/types") */

module.exports = (sequelize, DataType)=>{
    const Ofertas = sequelize.define('Ofertas', {
        id: {
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        active:true,
        discount:DataType.FLOAT,
        produtos_id: DataType.INTEGER
    },{
        timestamps:false
    }) 
        Ofertas.associate = (models) => {
            Ofertas.hasOne(models.Produtos,{
            foreignKey: 'id'
        })
    }
    return Ofertas
}