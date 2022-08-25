'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes',{
      id:{
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
      cpf: Sequelize.STRING,
      telefone: Sequelize.STRING,
      data_nascimento:Sequelize.DATE,
      usuario_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
  },{      
      timestamps:false
  }) 
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
  };
  
