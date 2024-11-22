// backend/src/routes/incentiveRoutes.js
const express = require('express');
const router = express.Router();
const incentiveController = require('../controllers/incentiveController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/search', 
  authMiddleware.authenticate,
  incentiveController.searchIncentives
);

router.post('/', 
  authMiddleware.authenticate,
  authMiddleware.checkPermission('createIncentive'),
  incentiveController.createIncentive
);

router.get('/:id', 
  authMiddleware.authenticate,
  incentiveController.getIncentiveDetails
);

module.exports = router;