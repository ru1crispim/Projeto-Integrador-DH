'use strict';

  module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.createTable('Pedidos',{
        id:{
          type:Sequelize.INTEGER, 
          primaryKey:true,
          unique:true,
          autoIncrement:true
      },
        valor_total: Sequelize.FLOAT,
        codigo_status: Sequelize.STRING,
        cliente_id: {
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        },
        endereco_cobranca: {
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        },
        endereco_entrega: {
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
      await queryInterface.dropTable('Pedidos');
    }
    };
  