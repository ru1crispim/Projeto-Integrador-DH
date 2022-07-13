'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', { id:{
      type:DataType.INTEGER, 
      primaryKey:true,
      unique:true,
      autoIncrement:true
  },
  nome:DataType.STRING,  
  sobrenome: DataType.STRING,
  email:{
      type:DataType.STRING,
      allowNull:false  
  },
  cpf: DataType.INTEGER,
  telefone: DataType.INTEGER,
  data_nascimento:DataType.DATE
    }, {
      timestamps: false
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
  };
