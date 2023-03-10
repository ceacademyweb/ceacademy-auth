const express = require('express');
const {
  index,
  show,
  store,
  update,
  destroy,
} = require('../controllers/journal');
const authMiddleware = require('../middlelwares/authMiddleware');

const routesJournal = express.Router();

routesJournal.get('/journal', index);
routesJournal.get('journal/:id', show);

routesJournal.post('/journal', store);
routesJournal.put('journal/:id', update);
routesJournal.delete('journal/:id', destroy);

module.exports = routesJournal;

