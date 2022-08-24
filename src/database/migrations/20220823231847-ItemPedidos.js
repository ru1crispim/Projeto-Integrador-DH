'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ItemPedidos',{
      id:{
          type:Sequelize.INTEGER, 
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
  },{
      timestamps: false
  })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemPedidos');
  }
  };
