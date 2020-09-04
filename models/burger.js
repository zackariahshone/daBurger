const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        //cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
        console.log('this is cd: ',cb());
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

  console.log(burger);
  
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  










module.exports = burger;