const path = require('path');
const app = require('./server');

const conn = require('./conn/conn');
app.get('/', (req, res) => {
  res.send('funciona');
});
// const userController = require('./controllers/userController');
// const adminController = require('./controllers/adminController');
// const authMiddleware = require('./middlewares/authMiddleware');
// app.get('/user', userController.index);
// app.post('/user', userController.store);
// app.post('/login', userController.login);
// app.get('/admin', authMiddleware, adminController.index);

// console.log(path.join(__dirname, './controllers/userController'));
// path.join(__dirname, './controllers/userController');
