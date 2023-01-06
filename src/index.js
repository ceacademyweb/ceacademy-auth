const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = require('./server');
const conn = require('./conn/conn');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
