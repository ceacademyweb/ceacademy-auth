const User = require('../models/User');
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
  });
  user.save((err, result) => {
    if (err) {
      res.send('ha ocurrido un error ' + err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  index,
  store,
};
