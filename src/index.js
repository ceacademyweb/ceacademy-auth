const app = require('./server');
const conn = require('./conn/conn');
const routesUsers = require('./routes/usersRoutes');
const routesvideos = require('./routes/videosRoutes');
const adminMiddleware = require('./middlelwares/adminMiddleware');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(routesUsers);
app.use(routesvideos);

app.get('/admin', adminMiddleware, (req, res) => {
  res.send('Hello Admin!');
});
