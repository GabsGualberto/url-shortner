const express = require('express');
const userController = require('../controllers/userController');
const auth = require("../middleware/auth");
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', auth, userController.getUsers);
router.get('/:id', auth, userController.getUserById);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;