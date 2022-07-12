'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios',{
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
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};
