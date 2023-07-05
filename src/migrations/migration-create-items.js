'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      priceBeforeSale: {
        type: Sequelize.STRING
      },
      priceAfterSale: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB('long'),
      },
      descriptionHTML: {
        type: Sequelize.TEXT
      },
      typeOf: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  }
};