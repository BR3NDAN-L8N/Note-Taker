// 
//  DEPENDENCIES 
//
var express = require("express");
const path = require('path');


// ==============

// 
// GLOBAL VARIABLES
// 
var app = express();
// Set initial port
var PORT = process.env.PORT || 8080;
// ==============
//app.use("/",  require("./routes/htmlRoutes"));
// 
//  APP CODE
// 
// Sets up the app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ==============

// SET STATIC FOLDER
// .use = used for including middleware
// __dirname = current directory
//  public is the name of the folder to make static
app.use(express.static(path.join(__dirname, 'public')));
// ==============

// 
// ROUTER
//
//  routes for our app to direct traffic
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// ==============

// 
// LISTENER
//
// Start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
// ==============