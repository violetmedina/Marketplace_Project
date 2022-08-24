'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inCart: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      itemID: {
        type: Sequelize.INTEGER,
        references: {model: 'items',
        key: 'id'
        }
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
    await queryInterface.dropTable('transactions');
  }
};