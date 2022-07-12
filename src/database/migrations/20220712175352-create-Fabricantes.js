'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Fabricantes', {
      id:{
          type:DataType.INTEGER, 
          primaryKey:true,
          autoIncrement:true
      },
      nome:DataType.STRING
    }, {
      timestamps: false
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Fabricantes');
  }
};
