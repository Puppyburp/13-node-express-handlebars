// import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
  all: function(burgerCB) {
    orm.all("burger", function(res) {
      burgerCB(res);
    });
  },
  // the variables cols and vals are arrays
  create: function(cols, vals, burgerCB) {
    orm.create("burger", cols, vals, function(res) {
      burgerCB(res);
    });
  },
  update: function(objColVals, condition, burgerCB) {
    orm.update("burger", objColVals, condition, function(res) {
      burgerCB(res);
    });
  }
};

// export the database functions for the controller (burgers_controller.js)
module.exports = burger;