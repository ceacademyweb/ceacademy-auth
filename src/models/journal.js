const mongoose = require('mongoose');

const journal = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  imagePath:{
    type: String,
  },
  ext:{
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
  journalQualifieldPath:{
    type: String,
  },
  journalQualifieldExt:{
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Journal', journal);
