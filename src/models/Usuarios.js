module.exports = (sequelize, DataType)=>{
    const Usuarios = sequelize.define('Usuarios',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        nome:DataType.STRING,   
        email:{
            type:DataType.STRING,
            allowNull:false  
        },
        senha:DataType.STRING
    }, {
        
        timestamps:false 
    })
    return Usuarios; 
}
