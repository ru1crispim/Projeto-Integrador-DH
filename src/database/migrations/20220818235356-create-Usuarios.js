'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Usuarios', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        unique:true,
        autoIncrement:true
    },
      email:{
        type:Sequelize.STRING,
        allowNull:false  
    },
      senha:Sequelize.STRING,
      admin: {
        type: Sequelize.BOOLEAN, 
        default: false
      }
    })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
  
};
