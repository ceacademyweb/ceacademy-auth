const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = require('./server');
const conn = require('./conn/conn');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  res.send('Welcome Users');
  // User.find({}, (err, result) => {
  //   if (err) {
  //     res.json({ message: err });
  //   } else {
  //     res.send(result);
  //   }
  // });
});

app.post('api/users', (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  res.send(user);
});
