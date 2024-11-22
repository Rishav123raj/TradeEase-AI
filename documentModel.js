// backend/src/models/documentModel.js
const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      'Invoice', 
      'ExportPermit', 
      'CertificateOfOrigin', 
      'PackingList', 
      'BillOfLading'
    ],
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  metadata: {
    filename: String,
    fileUrl: String,
    size: Number,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  },
  productDetails: {
    name: String,
    category: String,
    hsCode: String,
    quantity: Number,
    value: Number
  },
  exportDetails: {
    sourceCountry: String,
    destinationCountry: String,
    exportDate: Date
  },
  complianceStatus: {
    type: String,
    enum: ['Pending', 'Verified', 'Rejected'],
    default: 'Pending'
  },
  digitalSignature: {
    signed: Boolean,
    signatureHash: String
  }
}, { 
  timestamps: true 
});

DocumentSchema.index({ 
  type: 1, 
  userId: 1, 
  'exportDetails.sourceCountry': 1 
});

module.exports = mongoose.model('Document', DocumentSchema);