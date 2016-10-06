//Statements are written in a different order than convention in order to group topics together 

//Begin by requiring the express module and initialize a new express application using express();
const express = require('express');
const app = express();

//bodyParser is used to populate the req.body attribute of incoming requests, among other things. It is extremely useful, but not necessary.
const bodyParser = require('body-parser');
//bodyParser.json() creates middleware that only parses json
app.use(bodyParser.json());
//bodyParser.urlencoded() creates middleware that only parses URL encoded streams (how most browsers send data)
//the extended:true option allows for parsing of richer objects and arrays, making it seem more similar to JSON
app.use(bodyParser.urlencoded({extended: true}));

//note that path was _not_ installed via a separate call to npm install.
//this is an included package with express
const path = require('path')

//app.set is used to set the value of an app setting, of whcih there are a variety
//We will go into detail later about process.env, but for now just know that this is a process variable
app.set('port', (process.env.PORT || 3000));

//this allows us to serve static files in an extremely convenient format
app.use('/', express.static(path.join(__dirname, 'public')));

//finally, we call app.listen to bind our application to a port and listen for incoming requests on that port
//for our own convenient, we use the optional callback to log our port starting up
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});