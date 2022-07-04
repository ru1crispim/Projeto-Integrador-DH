// const {Sequelize, DataType} = require('sequelize');
// const databaseConfig = require('../configs/database');

// const connection =  new Sequelize(databaseConfig);



module.exports = (sequelize, DataType)=>{
    const Usuarios = sequelize.define('Usuarios',{
        id:{
            type:DataType.INTEGER,  // que tipo ele é
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
