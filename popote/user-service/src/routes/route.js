// routes.js

const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

// Route for creating a new user
router.post('/signup', UserController.createUser);

// Route for retrieving a user by ID
router.get('/api/users/:id', UserController.getUserById);

// Route for updating a user
router.put('/api/users/:id', UserController.updateUser);

// Route for deleting a user
router.delete('/api/users/:id', UserController.deleteUser);

module.exports = router;
