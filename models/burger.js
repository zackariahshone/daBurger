const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
      orm.all("burger", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burger", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burger", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

  console.log(burger);
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  











module.exports = burger;