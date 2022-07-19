module.exports = (sequelize, DataType)=>{
    const Administradores = sequelize.define('Administradores',{
        id:{
            type:DataType.INTEGER,  // que tipo ele é
            primaryKey:true,
            unique:true,
            autoIncrement:true
        },
        nome:DataType.STRING,  
        senha: DataType.STRING,
    }, {
        
        timestamps:false 
    })
    return Administradores; 
}
