'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Fabricantes',{
      id:{
          type:Sequelize.INTEGER, 
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
      nome:Sequelize.STRING,
      produtos_id:Sequelize.INTEGER
  }, {
      timestamps:false 
  }
  )},
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Fabricantes');
  }
}