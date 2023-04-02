const express = require('express');
const {
  // index,
  // show,
  store,
  // update,
  destroy,
  // readFile
} = require('../controllers/qualifiedController');
const authMiddleware = require('../middlelwares/authMiddleware');

const routesQualified = express.Router();


routesQualified.post('/qualified', store);
routesQualified.put('/qualified/:id', destroy);

module.exports = routesQualified;
