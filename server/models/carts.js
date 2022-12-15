'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.carts.belongsTo(models.users, {
        foreignKey: 'userID',
        targetKey: 'id'
      })
    }
  }
  carts.init({
    userID: DataTypes.INTEGER,
    itemID: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'carts',
  });
  return carts;
};