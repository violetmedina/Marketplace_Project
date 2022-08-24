'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.items.belongsTo(models.users, {foreignKey: 'userID'})
    }
  }
  items.init({
    category: DataTypes.STRING,
    listingName: DataTypes.STRING,
    listingDescription: DataTypes.STRING,
    listingPrice: DataTypes.INTEGER,
    inCart: DataTypes.BOOLEAN,
    userID: DataTypes.INTEGER,
    imageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};