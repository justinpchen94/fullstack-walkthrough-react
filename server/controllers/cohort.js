const express = require('express')

//when we do have our routes more spread out, we must first create an express Router object
const router = express.Router()

//we attach behavior to a GET request here
router.get('/:cohort', (req,res) => {
  //Also note that the file path has changed. This is because of the way we handled the routing in the server.js file such that we no longer need to pattern match against the prefix `/api/cohort` because we can assume we are only in this file because that pattern has been matched
  
  console.log("Registered a GET at /api/cohort/:cohort")

  let cohort = req.params.cohort
  let retort = (cohort === 49) 
               ? "MKS" + cohort + " is the worst" 
               : "MKS" + cohort + " is the best"
  res.send(retort)

})

router.get('/longer/path/samplePath', (req,res) => {
  res.send('We hit /longer/path/samplePath')
})

// you can also attach multiple params to a path
router.get('/:cohort/:descriptor', (req,res) => {

  let cohort = req.params.cohort
      desc = req.params.descriptor
  let retort = (cohort === 49) 
               ? "MKS" + cohort + " is the " + desc 
               : "MKS" + cohort + " is the " + desc
  res.send(retort)
})


//we must export the router object in order for it to be used in other files
module.exports = router;