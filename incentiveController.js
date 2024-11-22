// backend/src/controllers/incentiveController.js
const IncentiveModel = require('../models/incentiveModel');

class IncentiveController {
  async searchIncentives(req, res) {
    try {
      const { 
        type, 
        targetIndustries, 
        minFundingAmount, 
        status 
      } = req.query;

      const query = {};
      if (type) query.type = type;
      if (targetIndustries) query.targetIndustries = { $in: targetIndustries.split(',') };
      if (minFundingAmount) query.fundingAmount = { $gte: Number(minFundingAmount) };
      if (status) query.status = status;

      const incentives = await IncentiveModel.find(query)
        .sort({ fundingAmount: -1 })
        .limit(10);

      res.json(incentives);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createIncentive(req, res) {
    try {
      const incentiveData = req.body;
      const newIncentive = new IncentiveModel(incentiveData);
      await newIncentive.save();
      
      res.status(201).json(newIncentive);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getIncentiveDetails(req, res) {
    try {
      const incentive = await IncentiveModel.findById(req.params.id);
      
      if (!incentive) {
        return res.status(404).json({ message: 'Incentive not found' });
      }

      res.json(incentive);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new IncentiveController();