//We first require mongoose, a mongo ODM, to make our use of mongo easier
const mongoose = require('mongoose');
const db = mongoose.connection;

//this line will look for a `.env` file and load its contents into the process.env global object
require('dotenv').config();

//We create the url needed to connect to our database on mlab
let dbUrl = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds053216.mlab.com:53216/walkthrough"

//connect!
mongoose.connect(dbUrl);

//we use the following two lines to error log or let us know we're connected
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("We are connected to our mongo database!");
});

//export this db connection to other files so we can interact with our db
module.exports = db;