const express = require('express')
const router = express.Router()

//Require the model exported in our models/messages so we can interact with it
const Msg = require('../models/messages')


//get all the messages in the database
router.get('/', (req,res) => {
  Msg
    .find()
    .exec(function(err,data) {
    res.json({messages:data})
  })

})


//Create a new message and store it
router.post('/', (req,res) => {
  let msg = req.body.message

  console.log("message is:", msg)
  new Msg({message: msg})
    .save((err) => {
      if (err) console.log(err)
    })
    .then((arg) => {
      res.send("we did it fam")
    })

})


router.put('/', (req,res) => {
  res.send("We haven't implemented updating yet!")
})

router.put('/', (req,res) => {
  res.send("We haven't implemented deleting yet!")
})


//we must export the router object in order for it to be used in other files
module.exports = router;