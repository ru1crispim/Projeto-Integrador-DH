'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Endereco', {
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        unique:true,
        autoIncrement:true
    },
      cep: Sequelize.STRING,
      endereco: Sequelize.STRING,
      numero: Sequelize.INTERGER,
      complemento: Sequelize.STRING,
      bairro: Sequelize.STRING,
      cidade: Sequelize.STRING,
      estado: Sequelize.STRING,
      referencia: Sequelize.STRING,
      pedidos_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Pedidos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Endereco');
  }
};
