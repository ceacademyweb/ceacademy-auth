const express = require('express');
const {
  // index,
  // show,
  store,
  // update,
  levelChange,
  destroy,
  // readFile
} = require('../controllers/qualifiedController');
const authMiddleware = require('../middlelwares/authMiddleware');

const routesQualified = express.Router();


routesQualified.post('/qualified', store);
routesQualified.post('/level', levelChange);
routesQualified.put('/qualified/:id', destroy);

module.exports = routesQualified;
