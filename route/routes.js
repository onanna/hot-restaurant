//Dependencies
var path = require('path');

// Routes
// =============================================================
module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname,"/../reserve.html"));
    // console.log(__dirname)
  });

    //default GET route that leads to home.html - displays home page
    app.get("/table", function(req, res) {
        res.sendFile(path.join(__dirname,"/../table.html"));
        // console.log(__dirname)
      });

  //a USE route to home page
  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname + '/../index.html'));
    //   console.log(__dirname)
  });
};