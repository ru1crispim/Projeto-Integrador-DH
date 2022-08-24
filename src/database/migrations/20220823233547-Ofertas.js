'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Ofertas',{
      id:{
          type:Sequelize.INTEGER, 
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
      active:Sequelize.BOOLEAN,
      discount:Sequelize.FLOAT,
      produtos_id: Sequelize.INTEGER
  },{
      timestamps:false
  }) 
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Ofertas');
  }
  };
