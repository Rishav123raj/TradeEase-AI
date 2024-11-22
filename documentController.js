// backend/src/controllers/documentController.js
const DocumentModel = require('../models/documentModel');
const DocumentGenerator = require('../utils/documentGenerator');

class DocumentController {
  async uploadDocument(req, res) {
    try {
      const { userId, type, productDetails, exportDetails } = req.body;
      const file = req.file;

      const newDocument = new DocumentModel({
        type,
        userId,
        metadata: {
          filename: file.originalname,
          fileUrl: file.path,
          size: file.size
        },
        productDetails,
        exportDetails
      });

      await newDocument.save();
      
      res.status(201).json(newDocument);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async generateDocument(req, res) {
    try {
      const documentData = req.body;
      const fileName = DocumentGenerator.generateExportInvoice(documentData);
      
      res.json({ 
        message: 'Document generated successfully', 
        fileName 
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserDocuments(req, res) {
    try {
      const { userId } = req.params;
      const documents = await DocumentModel.find({ userId })
        .sort({ createdAt: -1 })
        .limit(50);

      res.json(documents);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new DocumentController();