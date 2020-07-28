// import models connection
var express = require("express");
var router = express.Router();

// import burger.js to use its database function
var burger = require("../models/burger.js");

// create all the routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var handlebarObject = {
      burger: data
    };
    console.log(handlebarObject);
    res.render("index", handlebarObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burgerName, 0
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devour
  }, condition, function() {
    res.redirect("/");
  });
});

// export routes for server.js to use
module.exports = router;