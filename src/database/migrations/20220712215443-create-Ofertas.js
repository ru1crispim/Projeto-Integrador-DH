'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Ofertas', {
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      active:Sequelize.BOOLEAN,
      inactive:Sequelize.BOOLEAN, //como alterar para true or false
      discount:Sequelize.STRING
    },{
    timestamps: false
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Ofertas')
  }
};