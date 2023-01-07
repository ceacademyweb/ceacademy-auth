const express = require('express');
const userController = require('../controllers/userController');

const routesUsers = express.Router();

routesUsers.get('/users', userController.index);

routesUsers.post('/users', userController.store);

module.exports = routesUsers;
