'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('items_transactions', {
      itemID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
          key: 'id'
        }
      },
    transactionID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'transactions',
          key: 'id'
        }
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
