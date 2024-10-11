const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers)
// router.get('/user/:id', userController.GetUserById);
// router.post('/user', userController.CreateUser);

module.exports = router;