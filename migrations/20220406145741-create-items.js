'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING(25)
      },
      listingName: {
        type: Sequelize.STRING(50)
      },
      listingDescription: {
        type: Sequelize.STRING(300)
      },
      listingPrice: {
        type: Sequelize.INTEGER
      },
      inCart: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {model: 'users',
        key: 'id'
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('items');
  }
};