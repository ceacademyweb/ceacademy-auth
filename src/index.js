const app = require('./server');
const conn = require('./conn/conn');
const routesUsers = require('./routes/usersRoutes');
const routesvideos = require('./routes/videosRoutes');
const routesadmin = require('./routes/adminRoutes');
const routesJournal = require('./routes/journalRoutes');
const cors = require('cors');
const adminMiddleware = require('./middlelwares/adminMiddleware');
const routesQualified = require("./routes/qualifiedRoutes");

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(cors());
app.use(routesUsers);
app.use(routesvideos);
app.use(routesJournal);
app.use(routesQualified);
app.use('/admin', routesadmin);
app.get('/obt', (req, res) => {
  console.log('entra');
  res.send('llega');
});

// app.get('/admin', adminMiddleware, (req, res) => {
//   res.send('Hello Admin!');
// });
