'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    customer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Burgers.hasOne(models.Customers);
      }
    }
  });
  return Burgers;
};