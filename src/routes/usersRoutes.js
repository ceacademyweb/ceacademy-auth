const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlelwares/authMiddleware');

const routesUsers = express.Router();

routesUsers.get('/users', authMiddleware, userController.index);

routesUsers.post('/users', authMiddleware, userController.store);
routesUsers.post('/login', userController.login);
routesUsers.post('/logout', authMiddleware, userController.logout);

module.exports = routesUsers;
