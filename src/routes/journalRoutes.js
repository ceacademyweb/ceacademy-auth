const express = require('express');
const {
  index,
  show,
  store,
  update,
  destroy,
  readFile
} = require('../controllers/journal');
const authMiddleware = require('../middlelwares/authMiddleware');

const routesJournal = express.Router();

routesJournal.get('/journal', index);
routesJournal.get('/journal/:id', show);

routesJournal.post('/journal', store);
routesJournal.get('/files', readFile);
routesJournal.put('/journal/:id', update);
routesJournal.delete('/journal/:id', destroy);

routesJournal.get('/alt/:id', (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
});

module.exports = routesJournal;
