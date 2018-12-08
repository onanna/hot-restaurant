//Dependencies
var path = require('path');
var reservations = require("../data/data")

// Routes
// =============================================================
module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname,"/../reserve.html"));
  });

    //default GET route that leads to home.html - displays home page
    app.get("/table", function(req, res) {
        res.sendFile(path.join(__dirname,"/../table.html"));
      });

  //a USE route to home page
  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname + '/../index.html'));
  });
  // Displays all current reservations
      app.get("/api/data", function(req, res) {
      return res.json(reservations);
      });
};
