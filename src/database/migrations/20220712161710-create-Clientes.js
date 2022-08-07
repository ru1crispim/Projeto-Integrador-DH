'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', { id:{
      type:Sequelize.INTEGER, 
      primaryKey:true,
      unique:true,
      autoIncrement:true
  },
  nome:Sequelize.STRING,  
  sobrenome: Sequelize.STRING,
  email:{
      type:Sequelize.STRING,
      allowNull:false  
  },
  cpf: Sequelize.INTEGER,
  telefone: Sequelize.INTEGER,
  data_nascimento:Sequelize.DATE
    }, {
      timestamps: false
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
  };
