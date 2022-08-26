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
      clientes_id:{
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
  },{
      timestamps: false   
  }) 
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Enderecos');
  }
  };