'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


     await queryInterface.bulkInsert('items', [{
       category: 'furniture',
       listingName: 'Gray Sofa',
       listingDescription: 'Chaise Lounge, 3-Seat, L-Shape Design, Reversible Ottoman Bench',
       listingPrice: 89.99,
       inCart: false,
       userID: 14,
       createdAt: new Date(),
       updatedAt: new Date(),
       imageURL: '../images/itemPictures/blue_chair.jpg'
     
    },
    {
      category: 'furniture',
      listingName: 'Blue Chair',
      listingDescription: 'Milliard Cozy Chair/Faux Fur Saucer Chair for Bedroom/X-Large (Blue)',
      listingPrice: 89.99,
      inCart: false,
      userID: 14,
      createdAt: new Date(),
      updatedAt: new Date(),
      imageURL: '../images/itemPictures/blue_chair.jpg'

  }], {});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
