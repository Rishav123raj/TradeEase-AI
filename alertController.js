// backend/src/controllers/alertController.js
const WebSocket = require('ws');
const axios = require('axios');

class AlertController {
  constructor() {
    this.wss = new WebSocket.Server({ port: 8080 });
    this.setupWebSocketServer();
  }

  setupWebSocketServer() {
    this.wss.on('connection', (ws) => {
      console.log('Client connected to WebSocket');
      
      ws.on('message', (message) => {
        console.log('Received:', message);
      });
    });
  }

  async checkRegulationUpdates(req, res) {
    try {
      const { productCategory, targetMarket } = req.body;
      
      const updates = await this.fetchRegulationUpdates(productCategory, targetMarket);
      
      this.broadcastAlerts(updates);
      
      res.json({ updates, message: 'Alerts processed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async fetchRegulationUpdates(productCategory, targetMarket) {
    try {
      const response = await axios.get('https://trade-regulations-api.gov/updates', {
        params: { productCategory, targetMarket }
      });
      return response.data;
    } catch (error) {
      console.error('Regulation update fetch failed:', error);
      return [];
    }
  }

  broadcastAlerts(updates) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(updates));
      }
    });
  }
}

module.exports = new AlertController();