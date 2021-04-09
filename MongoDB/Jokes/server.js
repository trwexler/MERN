const express = require('express');
const app = express();
const mongoose = require('mongoose');

//need middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Mongoose config here. 
// Equivilant of doing a copy and paste of that file here. 
// Not taking a specific part.
// Whole file.
require("./config/mongoose.config");


//Routes here:
//Similar to a copy/paste, 
//but there's an export in project.route
//so it only grabs that.
// const exportedRoutesFunction = require("./routes/project.route");
// exportedRoutesFunction(app);

//Two lines above is what's happening. 
//This is the easiest way to write:
require('./routes/project.route')(app);



app.listen(8000, () =>
  console.log("You have successfully connected to port 8000"))