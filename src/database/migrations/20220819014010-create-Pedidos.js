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
    valor_total: Sequelize.FLOAT,
    endereco_cobranca: Sequelize.STRING,
    endereco_entrega: Sequelize.STRING,
    codigo_status: true,
    ItemPedido_id:  {
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