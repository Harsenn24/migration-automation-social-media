'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Startup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Startup.init({
    user_id: DataTypes.INTEGER,
    running: DataTypes.INTEGER,
    detail: DataTypes.TEXT,
    createdAt: DataTypes.INTEGER,
    updatedAt: DataTypes.INTEGER,
    active: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Startup',
  });
  return Startup;
};