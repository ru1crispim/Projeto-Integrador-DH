'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Administradores',{
      id:{
          type:DataType.INTEGER, 
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
      nome:DataType.STRING,
      senha:DataType.STRING
  }, {
      
      timestamps:false 
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Administradores');
  }
};
