const app = require('./server');
const conn = require('./conn/conn');
const routesUsers = require('./routes/usersRoutes');
const routesvideos = require('./routes/videosRoutes');
const routesadmin = require('./routes/adminRoutes');
const routesJournal = require('./routes/journalRoutes');
const cors = require('cors');
const adminMiddleware = require('./middlelwares/adminMiddleware');

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(cors());
app.use(routesUsers);
app.use(routesvideos);
app.use(routesJournal);
app.use('/admin', routesadmin);

// app.get('/admin', adminMiddleware, (req, res) => {
//   res.send('Hello Admin!');
// });
