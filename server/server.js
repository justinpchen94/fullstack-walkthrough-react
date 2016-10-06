const express = require('express');
const bodyParser = require('body-parser');

const path = require('path')

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Routing

//Here we create an endpoint with a relative url of /api/cohort/49
app.get('/api/cohort/:cohort', (req,res) => {
  console.log("Registered a GET at /api/cohort/:cohort")

  //notice the :cohort in the url
  //this is called a param and this will be parsed into an object attached to the req called req.params
  //this is one method of passing information along via GET requests, whose request objects do not allow a data property as seen with POST requests

  let cohort = req.params.cohort
  let retort = (cohort === 49) 
               ? "MKS" + cohort + " is the worst" 
               : "MKS" + cohort + " is the best"
  res.send(retort)

})






app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});