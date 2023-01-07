const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlelwares/authMiddleware');

const routesUsers = express.Router();

routesUsers.get('/users', authMiddleware, userController.index);

routesUsers.post('/users', authMiddleware, userController.store);
routesUsers.post('/login', authMiddleware, userController.login);

module.exports = routesUsers;
