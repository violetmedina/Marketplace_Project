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
      models.items.belongsTo(models.users, {
        foreignKey: 'userID',
        targetKey: 'id'
      })
    }
  }
  items.init({
    userID: DataTypes.INTEGER,
    category: DataTypes.STRING,
    listingName: DataTypes.STRING,
    listingDescription: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    listingPrice: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    buyerID: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'items',
  });
  return items;
};