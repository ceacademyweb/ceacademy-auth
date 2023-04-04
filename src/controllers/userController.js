const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const Journal = require('../models/journal');
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
const showWithJournal = async (req, res) => {
  const id = req.params.id;
  const resultado = await Journal.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: '_user',
        foreignField: '_id',
        as: 'user',
      }
    }
  ])
  console.log(resultado)
  res.send(resultado)
};
const showWithUser = async (req, res) => {
  const id = req.params.id;
  Journal.findOne({ _id: id }, (err, result) => {
    // res.send(result);
    User.findOne({ _id: result.userId }, (err, user) => {
      res.send({result, user})
    })
  })
};

const getJournalsForUser = (req, res) => {
  const id = req.params.id;
  Journal.find({ userId: id }, (err, result) => {
    res.send(result);
  });
};
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

// const login = (req, res) => {
//   console.log(req.body);
//   res.send({ message: req.body });
// };

const login = (req, res) => {
  console.log('login');
  console.log(req.body);
  User.findOne({ email: req.body.email }, (err, result) => {
    if (err) res.status(400).send('ha ocurrido un error');
    if (result) {
      const ud = {
        id: result.id,
        name: result.name,
        email: result.email,
        active: result.active,
        journal: result.journalLevel,
        isAdmin: result.isAdmin,
      };
      if (bcrypt.compareSync(req.body.password, result.password)) {
        console.log(result);
        jwt.sign(
          { user: result },
          process.env.SECRET_KEY,
          { expiresIn: '86400000ms' },
          (err, token) => {
            console.log({ message: 'Autencicacion Correcta', token });
            res.json({
              message: 'Autenticacion Correcta',
              userData: result,
              token,
              status: 200,
            });
          }
        );
      } else {
        res.send({ message: 'NO autorizado', status: 401 });
      }
    } else {
      res.send({ message: 'El Correo no existes', status: 401 });
    }
  });
};

const logout = (req, res) => {
  res.send(req.token);
};

const getJournal = (req, res) => {
  const id = req.params.id;
  Journal.find({ _id: id }, (err, result) => {
    if (err) {
      res.status(401).send(err);
    } else {
      User.findOne({ _id: result[0].userId }, (err, user) => {
        if(err) {
          res.status(401).send(err);
        }
        res.status(200).json({result, user});
      })
    }
  });
}

module.exports = {
  index,
  store,
  login,
  logout,
  update,
  userDelete,
  show,
  showWithJournal,
  showWithUser,
  getJournalsForUser,
  getJournal
};
