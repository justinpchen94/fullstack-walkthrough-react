const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express(),

      //morgan is a logging module that will give you details about requests sent to your server
      //extremely useful when you're not sure if your server is being hit or responding correctly!
      logger = require('morgan'),

      //moment is a module that makes manipulating dates and times much less of a headache
      moment = require('moment'),

      cors = require('cors')

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//this initializes the morgan middleware in the 'dev' mode. See documentation for oher outputs and options that morgan can do
app.use(logger('dev'))

//this takes care of pesky origin errors that you may run into when using API's
//essentiall attaches the correct headers to our req/res for us
app.use(cors());


//Routing

//we change the example 'cohort' route to 'messages' so that the name is consistent with what it represents within our app
const messageRouter = require('./controllers/messages')
app.use('/api/messages', messageRouter)


//unnecessary, but moment is used here to log the time at which our server starts up so that I can keep track of if I'm running the latest server code or not.
app.listen(app.get('port'), function() {
  console.log('[' + moment().format('hh:mm:ss') + ']' + ' Express Server listening on port', app.get('port'));
});