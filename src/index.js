const app = require('./server');
const conn = require('./conn/conn');
const userController = require('./controllers/userController');
const routesUsers = require('./routes/usersRoutes');
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routesUsers);

// // const userController = require('./controller/userController');
// app.get('/users', userController.index);

// app.post('/users', userController.store);
