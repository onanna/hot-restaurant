//Dependencies
var path = require('path');

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

  //a USE route to home page
  app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname + '/../index.html'));
        // Displays all current reservations
        app.get("/api/data", function(req, res) {
          return res.json(reservations);
          });
    //   console.log(__dirname)
  });
  app.get("/index.html", function (req, res) {
    res.sendFile(path.join(__dirname + '/../index.html'));

  app.post("./api/data", function (req, res) {
      console.log(req.body)    
  } )
};
