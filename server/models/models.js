const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({

  message: {
    type: String,
    required: true
  },


});

module.exports = mongoose.model('Message', messageSchema);
