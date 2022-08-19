'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Clientes', {
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
      },
      cpf: Sequelize.INTEGER,
      telefone: Sequelize.INTEGER,
      data_nascimento:Sequelize.DATE,
      usuario_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      endereco_id:{
        type: Sequelize.INTEGER,
        references: { model: 'Endereco', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      pedidos_id:{
        type: Sequelize.INTEGER,
        references: { model: 'Pedidos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
  
};