const mongoose = require('mongoose');
const {SchemaType, Schema} = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  codeMember: {
    type: String,
    required: true,
    unique: true,
  },
  new: {
    type: Number,
    default: 1,
  },
  address: {
    type: String,
    required: true,
  },
  discordId: {
    type: String,
    required: true,
  },
  telegramId: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  level: {
    type: Number,
    default: 1,
  },
  password: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  journals:{
    type: Schema.Types.ObjectId,
    ref: 'Journal',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
