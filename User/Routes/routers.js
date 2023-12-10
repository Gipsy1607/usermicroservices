const express = NodeRequire('express');
const router = express.Router();
const userController = NodeRequire('./userController');

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);

// Add more routes for update and delete

module.exports = router;