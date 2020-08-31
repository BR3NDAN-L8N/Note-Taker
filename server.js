// 
//  DEPENDENCIES 
//
var express = require("express");
// ==============

// 
// GLOBAL VARIABLES
// 
var app = express();
// Set initial port
var PORT = process.env.PORT || 8080;
// ==============

// 
//  APP CODE
// 
// Sets up the app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ==============

// 
// ROUTER
//
//  routes for our app to direct traffic
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// 
// LISTENER
//
// Start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
// ==============