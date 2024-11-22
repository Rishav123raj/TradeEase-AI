// backend/src/utils/apiIntegrator.js
const axios = require('axios');
const env = require('../config/env');

class APIIntegrator {
  constructor() {
    this.axios = axios.create({
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async fetchDGFTRegulations(params) {
    try {
      const response = await this.axios.get('https://dgft.gov.in/api/regulations', {
        params,
        headers: { 'Authorization': `Bearer ${env.API_KEYS.DGFT}` }
      });
      return response.data;
    } catch (error) {
      console.error('DGFT API Error:', error);
      throw error;
    }
  }

  async fetchTradePortalData(endpoint, params) {
    try {
      const response = await this.axios.get(`https://tradeportal.api/${endpoint}`, {
        params,
        headers: { 'Authorization': `Bearer ${env.API_KEYS.TRADE_PORTAL}` }
      });
      return response.data;
    } catch (error) {
      console.error('Trade Portal API Error:', error);
      throw error;
    }
  }
}

module.exports = new APIIntegrator();