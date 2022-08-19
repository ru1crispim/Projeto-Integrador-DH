'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('ItemPedido', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        unique:true,
        autoIncrement:true
      },
    })
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Endereco');
  }
};
