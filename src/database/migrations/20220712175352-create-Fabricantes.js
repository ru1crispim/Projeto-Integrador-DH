'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Fabricantes', {
      id:{
          type:Sequelize.INTEGER, 
          primaryKey:true,
          autoIncrement:true
      },
      nome:Sequelize.STRING
    }, {
      timestamps: false
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Fabricantes');
  }
};
