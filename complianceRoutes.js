// backend/src/routes/complianceRoutes.js
const express = require('express');
const router = express.Router();
const complianceController = require('../controllers/complianceController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', 
  authMiddleware.authenticate,
  authMiddleware.checkPermission('createCompliance'),
  complianceController.createComplianceEntry
);

router.get('/details', 
  authMiddleware.authenticate,
  complianceController.getComplianceDetails
);

router.put('/update', 
  authMiddleware.authenticate,
  authMiddleware.checkPermission('updateCompliance'),
  complianceController.updateComplianceRegulations
);

module.exports = router;