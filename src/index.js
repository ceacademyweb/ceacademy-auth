const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = require('./server');
const conn = require('./conn/conn');
const userController = require('./controllers/userController');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// const userController = require('./controller/userController');
app.get('/api/users', userController.index);

app.post('/api/users', userController.store);
