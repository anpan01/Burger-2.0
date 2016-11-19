'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define('Customers', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Customers;
};