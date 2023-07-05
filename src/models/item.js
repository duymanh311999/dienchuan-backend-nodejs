'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Items.belongsTo(models.Allcode, { foreignKey: 'typeOf', targetKey: 'keyMap', as: 'typeofData' })

    }
  };
  Items.init({
    name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    priceBeforeSale: DataTypes.STRING,
    priceAfterSale: DataTypes.STRING,
    image: DataTypes.STRING,
    descriptionHTML: DataTypes.STRING,
    typeOf: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};