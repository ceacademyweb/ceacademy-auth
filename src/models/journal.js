const mongoose = require('mongoose');

const journal = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  imagePath:{
    type: String,
  },
  phase:{
    type: Number
  },
  level:{
    type: Number
  },
  qualified:{
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Journal', journal);
