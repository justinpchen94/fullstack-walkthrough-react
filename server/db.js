const mongoose = require('mongoose');
const db = mongoose.connection;

//plug in own promise library
mongoose.Promise = require('bluebird');

require('dotenv').config();

let dbUrl = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds053216.mlab.com:53216/walkthrough"

mongoose.connect(dbUrl);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("We are connected to our mongo database!");
});

module.exports = db;