'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos',{
      id:{
          type:Sequelize.INTEGER, 
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
      cep: Sequelize.STRING,
      endereco: Sequelize.STRING,
      numero: Sequelize.INTEGER,
      complemento: Sequelize.STRING,
      bairro: Sequelize.STRING,
      cidade: Sequelize.STRING,
      estado: Sequelize.STRING,
      referencia: Sequelize.STRING,
      pedidos_id: Sequelize.INTEGER
  },{
      timestamps: false   
  }) 
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Enderecos');
  }
  };