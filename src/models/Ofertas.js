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
    return Ofertas
}