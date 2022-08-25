'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ItemPedidos',{
      id:{
          type:Sequelize.INTEGER, 
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
      quantidade: Sequelize.INTEGER,
      valor_unitario: Sequelize.FLOAT,
      valor_total: Sequelize.FLOAT,
      produto_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      }
  },{
      timestamps: false
  })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemPedidos');
  }
  };
