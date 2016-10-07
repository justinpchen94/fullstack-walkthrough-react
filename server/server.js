const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Routing
const cohortRouter = require('./controllers/cohort')
app.use('/api/cohort', cohortRouter)



app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});