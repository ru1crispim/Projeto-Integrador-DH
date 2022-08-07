module.exports = (sequelize, DataType)=>{
    const Ofertas = sequelize.define('Ofertas', {
        id: {
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        active:true,
        inactive:false, //como alterar para true or false
        discount:DataType.STRING
    },{
        timestamps:false
    }) 
    return Ofertas
}