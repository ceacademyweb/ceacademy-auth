const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const index = (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.json({ message: err });
    } else {
      res.send(result);
    }
  });
};
const store = (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    active: false,
    admin: false,
  });
  user.save((err, result) => {
    if (err) {
      res.send('ha ocurrido un error ' + err);
    } else {
      res.send(result);
    }
  });
};

const login = (req, res) => {
  User.findOne({ email: req.body.email }, (err, result) => {
    if (err)
      return res
        .status(400)
        .send.json({ message: 'Usuario no encontrado', error: err });
    if (result) {
      if (bcrypt.compareSync(req.body.password, result.password)) {
        jwt.sign({ user: result }, process.env.SECRET_KEY, (err, token) => {
          res.json({ message: 'Autencicacion Correcta', token });
        });
      } else {
        res.send.json({ message: 'Contraseña Incorrecta', error: err });
      }
    }
  });
};

module.exports = {
  index,
  store,
  login,
};
