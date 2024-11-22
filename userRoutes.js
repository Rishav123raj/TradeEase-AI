// backend/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

router.get('/profile', 
  authMiddleware.authenticate,
  userController.getUserProfile
);

router.put('/profile', 
  authMiddleware.authenticate,
  userController.updateUserProfile
);

router.post('/reset-password', userController.initiatePasswordReset);
router.patch('/reset-password', userController.confirmPasswordReset);

module.exports = router;