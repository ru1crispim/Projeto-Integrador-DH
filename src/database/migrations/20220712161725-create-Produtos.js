'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos',{
      id:{
          type:DataType.INTEGER,
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
      nome:DataType.STRING,   
      categoria: DataType.STRING,
      valor:DataType.INTEGER,
      descricao: DataType.STRING,
      quantidade: DataType.INTEGER,
      console: DataType.STRING
  }, {
      
      timestamps:false 
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};
