'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Fabricantes', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        unique:true,
        autoIncrement:true
      },      
      nome:Sequelize.STRING,   
      valor:Sequelize.DECIMAL,
      categoria: Sequelize.STRING,
      descricao: Sequelize.STRING,
      quantidade: Sequelize.INTEGER,
      console: Sequelize.STRING,
      imagem:Sequelize.STRING,
      itemPedido_id: {
        type: Sequelize.INTEGER,
        references: { model: 'ItemPedido', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Endereco');
  }
};