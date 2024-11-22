// backend/src/models/incentiveModel.js
const mongoose = require('mongoose');

const IncentiveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['Tax Rebate', 'Green Grant', 'Export Subsidy', 'Innovation Fund'],
    required: true
  },
  description: String,
  eligibilityCriteria: [{
    category: String,
    requirements: [String]
  }],
  fundingAmount: {
    type: Number,
    min: 0
  },
  applicationDeadline: Date,
  status: {
    type: String,
    enum: ['Active', 'Expired', 'Upcoming'],
    default: 'Active'
  },
  targetIndustries: [String],
  governmentBody: {
    name: String,
    contactInfo: String
  }
}, { 
  timestamps: true 
});

IncentiveSchema.index({ type: 1, status: 1 });

module.exports = mongoose.model('Incentive', IncentiveSchema);