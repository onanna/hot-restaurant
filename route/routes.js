//Dependencies
var path = require('path');
var reservations = require("../data/data")

// Routes
// =============================================================
module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get("/reserve.html", function(req, res) {
    res.sendFile(path.join(__dirname,"/../reserve.html"));
    // console.log(__dirname)
  });

    //default GET route that leads to home.html - displays home page
    app.get("/table.html", function(req, res) {
        res.sendFile(path.join(__dirname,"/../table.html"));
        // console.log(__dirname)
      });
      app.get("/index.html", function (req, res) {
        res.sendFile(path.join(__dirname + '/../index.html'));
  //a USE route to home page
  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname + '/../index.html'));
    //   console.log(__dirname)
  });

  // Displays all current reservations
  app.get("/api/data", function(req, res) {
    return res.json(reservations);
    });

  app.post("/api/data", function (req, res) {

    console.log(reservations)
    reservations.push(req.body)
    console.log("New DAtA", reservations)
  } )
};
