const app = require('./server');
const conn = require('./conn/conn');
const routesUsers = require('./routes/usersRoutes');
const routesvideos = require('./routes/videosRoutes');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(routesUsers);
app.use(routesvideos);
