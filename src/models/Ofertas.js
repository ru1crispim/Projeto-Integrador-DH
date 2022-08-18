module.exports = (sequelize, DataType)=>{
    const Ofertas = sequelize.define('Ofertas', {
        id: {
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        active:true,
        discount:DataType.FLOAT
    },{
        timestamps:false
    }) 
        Ofertas.associate = (models) => {
            Ofertas.hasMany(models.Produtos,{
            foreignKey: 'id'
        })
        Ofertas.belongsToMany(Produtos, {through: 'ItemPedido'})
    }
    return Ofertas
}