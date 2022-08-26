module.exports = (sequelize, DataType)=>{
    const Usuarios = sequelize.define('Usuarios',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        email:{
            type:DataType.STRING,
            allowNull:false  
        },
        senha:DataType.STRING,
        admin: false
    },{      
        timestamps:false 
    }) 
        Usuarios.associate = (models) =>{
            Usuarios.belongsTo(models.Clientes, {foreignKey: 'id'})
        }
    return Usuarios; 
}
