const express = require('express');
const {
  index,
  show,
  store,
  update,
  destroy,
  showOne
} = require('../controllers/journalController');
const authMiddleware = require('../middlelwares/authMiddleware');

const routesJournal = express.Router();

routesJournal.get('/journals', index);
routesJournal.get('/journals/:id', show);
routesJournal.get('/journal/:id', showOne);

routesJournal.post('/journal', store);
routesJournal.put('/journal/:id', update);
routesJournal.delete('/journal/:id', destroy);

routesJournal.get('/alt/:id', (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
});

module.exports = routesJournal;
