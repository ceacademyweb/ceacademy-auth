const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const store = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    lastName: req.body.lastName,
    address: req.body.address,
    discordId: req.body.discordId,
    telegramId: req.body.telegramId,
    phone: req.body.name,
    codeMember: req.body.codeMember,
    // password: bcrypt.hashSync(req.body.password, 8),
  });
  user.save((err, result) => {
    if (err) {
      console.log(err);
      res.status(401).send('ha ocurrido un error ' + err);
    } else {
      res.send(result);
    }
  })
  // res.send(user)
}
module.exports = {
  store
}
