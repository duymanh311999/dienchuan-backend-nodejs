'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Admins.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' })
      // Admins.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' })
      // Admins.hasOne(models.Markdown, { foreignKey: 'doctorId' })
      // Admins.hasOne(models.Doctor_Infor, { foreignKey: 'doctorId' })

      // Admins.hasMany(models.Schedule, { foreignKey: 'doctorId', as: 'doctorData' })

      // Admins.hasMany(models.Booking, { foreignKey: 'patientId', as: 'patientData' })

    }
  };
  Admins.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    roleId: DataTypes.STRING,
    positionId: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Admins',
  });
  return Admins;
};