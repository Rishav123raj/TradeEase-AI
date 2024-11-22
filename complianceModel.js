// backend/src/models/complianceModel.js
const mongoose = require('mongoose');

const ComplianceSchema = new mongoose.Schema({
  productCategory: {
    type: String,
    required: true,
    index: true
  },
  targetMarket: {
    type: String,
    required: true
  },
  regulatoryRequirements: [{
    type: {
      name: String,
      description: String,
      mandatory: Boolean
    }
  }],
  complianceScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  },
  tags: [String]
}, {
  timestamps: true
});

ComplianceSchema.index({ productCategory: 1, targetMarket: 1 });

module.exports = mongoose.model('Compliance', ComplianceSchema);