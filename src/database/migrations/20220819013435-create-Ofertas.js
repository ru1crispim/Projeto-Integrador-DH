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
    active:true,
    discount: Sequelize.FLOAT,
    produtos_id: {
      type: Sequelize.INTEGER,
      references: { model: 'Produtos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  })
},
    async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('Endereco');
    }
};