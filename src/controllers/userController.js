const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const index = (req, res) => {
  console.log(req.body.user);
  User.find({}, (err, result) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.json({ currentUser: req.user, result });
    }
  });
};

const store = (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  user.save((err, result) => {
    if (err) {
      res.status(401).send('ha ocurrido un error ' + err);
    } else {
      res.send(result);
    }
  });
};

const update = (req, res) => {
  const _id = req.params.id;
  const data = req.body;
  User.findOneAndUpdate({ _id }, data, (err, result) => {
    if (err) {
      res.status(401).json({ message: 'Ha ocurrido un error', err });
    } else {
      res.send(result);
    }
  });
};

const userDelete = (req, res) => {
  const _id = req.params.id;
  User.findOneAndDelete({ _id }, (err, result) => {
    if (err) {
      res.status(401).json({ message: 'Ha ocurrido un error', err });
    } else {
      res.send('Video borrado');
    }
  });
};

const show = (req, res) => {
  const _id = req.params.id;
  User.find({ _id }, (err, result) => {
    if (err) {
      res.status(4001).json({ message: 'Ha ocurrido un error', err });
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

const logout = (req, res) => {
  res.send(req.token);
};

module.exports = {
  index,
  store,
  login,
  logout,
  update,
  userDelete,
  show,
};
