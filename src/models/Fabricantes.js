module.exports = (sequelize, DataType)=>{
    const Fabricantes = sequelize.define('Fabricantes',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:DataType.STRING
    }, {
        timestamps:false 
    })
        Fabricantes.associate = (models) => {
            Fabricantes.hasMany(models.Produtos,{
            foreignKey: 'Fabricantes_idFabricantes'
        })
    }
    return Fabricantes; 
}