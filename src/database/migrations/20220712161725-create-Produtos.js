'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos',{
      id:{
          type:Sequelize.INTEGER,
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
      nome:Sequelize.STRING,   
      categoria: Sequelize.STRING,
      valor:Sequelize.DECIMAL,
      descricao: Sequelize.STRING,
      quantidade: Sequelize.INTEGER,
      console: Sequelize.STRING,
      imagem: Sequelize.STRING
  }, {
      
      timestamps:false 
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};