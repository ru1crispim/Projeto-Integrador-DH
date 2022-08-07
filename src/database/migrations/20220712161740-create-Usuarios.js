'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios',{
      id:{
          type:Sequelize.INTEGER, 
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
      nome:Sequelize.STRING,   
      email:{
          type:Sequelize.STRING,
          allowNull:false  
      },
      senha:Sequelize.STRING
  }, {
      
      timestamps:false 
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};
