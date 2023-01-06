const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = require('./server');
const conn = require('./conn/conn');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  res.send('/api/users');
  // User.find({}, (err, result) => {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     res.send(result);
  //   }
  // });
});

app.post('/users', async (req, res) => {
  res.send(req.body);
  // const user = new User({
  //   name: req.body.name,
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: bcrypt.hashSync(req.body.password, 10),
  //   avatarUrl: imgPath,
  // });
  // // user.save();
  // let error = null;
  // try {
  //   await user.save();
  //   res.send(user);
  // } catch (err) {
  //   res.status(400).json({ message: 'ha ocurrido un error', err });
  //   error = err;
  // }
});
