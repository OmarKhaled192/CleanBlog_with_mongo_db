//Load evironment variable:
require('dotenv').config();

// Grap Application Dependancies 
const express = require("express"),
      app = express(),
      expressLayout = require("express-ejs-layouts"),
      mongoose = require("mongoose"),
      port = process.env.PORT || 3000;

// set view engine and static assets 
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(expressLayout); // this Define Middle ware for static assets 

// = Database connection
mongoose.connect(process.env.DB_URI); 
const db = mongoose.connection;

// check connection
(async () => {
  await mongoose.connect(process.env.DB_URI)
  .then(() => console.log("DB Connection Succeded..."))
  .catch((err) => console.log(err.message));
})();


//Define MiddleWare to fetch data from user
app.use(express.urlencoded({extended: false})) 
// app.use(express.json())

//Define App Routes 
app.use(require("./routes/web"))
  
// Run App server
app.listen(port, () => {
  console.log(`server running on localhost:${port} \n
  ==== open your browser on https://localhost:${port} ====`)
});