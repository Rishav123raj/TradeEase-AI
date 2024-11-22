// backend/src/controllers/complianceController.js
const ComplianceModel = require('../models/complianceModel');
const APIIntegrator = require('../utils/apiIntegrator');

class ComplianceController {
  async createComplianceEntry(req, res) {
    try {
      const { productCategory, targetMarket, regulatoryRequirements } = req.body;
      
      // Fetch additional regulatory data
      const additionalRegulations = await APIIntegrator.fetchDGFTRegulations({
        productCategory,
        targetMarket
      });

      const complianceEntry = new ComplianceModel({
        productCategory,
        targetMarket,
        regulatoryRequirements: [
          ...regulatoryRequirements,
          ...additionalRegulations
        ],
        complianceScore: this.calculateComplianceScore(regulatoryRequirements)
      });

      await complianceEntry.save();
      
      res.status(201).json(complianceEntry);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getComplianceDetails(req, res) {
    try {
      const { productCategory, targetMarket } = req.query;
      
      const complianceDetails = await ComplianceModel.findOne({
        productCategory,
        targetMarket
      });

      if (!complianceDetails) {
        return res.status(404).json({ message: 'No compliance details found' });
      }

      res.json(complianceDetails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  calculateComplianceScore(requirements) {
    const mandatoryCount = requirements.filter(req => req.mandatory).length;
    const totalRequirements = requirements.length;
    
    return totalRequirements > 0 
      ? Math.round((mandatoryCount / totalRequirements) * 100) 
      : 0;
  }

  async updateComplianceRegulations(req, res) {
    try {
      const { productCategory, targetMarket } = req.body;
      
      const updatedRegulations = await APIIntegrator.fetchDGFTRegulations({
        productCategory,
        targetMarket
      });

      const result = await ComplianceModel.findOneAndUpdate(
        { productCategory, targetMarket },
        { 
          regulatoryRequirements: updatedRegulations,
          lastUpdated: new Date()
        },
        { new: true }
      );

      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new ComplianceController();