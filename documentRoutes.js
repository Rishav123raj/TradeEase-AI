// backend/src/routes/documentRoutes.js
const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const authMiddleware = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.post('/upload', 
  authMiddleware.authenticate,
  uploadMiddleware.single('document'),
  documentController.uploadDocument
);

router.post('/generate', 
  authMiddleware.authenticate,
  documentController.generateDocument
);

router.get('/user/:userId', 
  authMiddleware.authenticate,
  authMiddleware.checkOwnership,
  documentController.getUserDocuments
);

module.exports = router;