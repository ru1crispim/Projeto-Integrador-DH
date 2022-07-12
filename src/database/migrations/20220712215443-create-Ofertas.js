'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Ofertas', {
      id: {
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      active:true,
      inactive:false, //como alterar para true or false
      discount:DataType.STRING
    },{
    timestamps: false
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Ofertas')
  }
};