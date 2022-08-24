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
        nome:Sequelize.STRING,  
        sobrenome: Sequelize.STRING,
        email:{
            type:Sequelize.STRING,
            allowNull:false  
        },
        valor_total: Sequelize.FLOAT,
        endereco_cobranca: Sequelize.STRING,
        endereco_entrega: Sequelize.STRING,
        codigo_status: Sequelize.BOOLEAN
    },{
        timestamps: false
    })
    },
    
    async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('Pedidos');
    }
    };
  