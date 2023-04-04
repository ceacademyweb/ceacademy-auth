const mongoose = require('mongoose');
const {SchemaType, Schema} = require("mongoose");

const journal = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  _user:{
    type: Schema.Types.ObjectId,
  },
  user: {
    type: Object
  },
  urlFile:{
    type: String,
  },
  refFileStorage: {
    type: String,
  },
  ext:{
    type: String,
  },
  level:{
    type: Number,
    default: 0
  },
  qualified:{
    type: Boolean,
    default: false
  },
  journalQualifieldPath:{
    type: String,
  },
  journalQualifieldRefFileStorage:{
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
