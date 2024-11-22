// backend/src/utils/realTimeAlerts.js
const WebSocket = require('ws');
const axios = require('axios');
const mongoose = require('mongoose');

class RealTimeAlertSystem {
  constructor() {
    this.wss = null;
    this.alertSubscriptions = new Map();
  }

  initializeWebSocketServer(httpServer) {
    this.wss = new WebSocket.Server({ server: httpServer });
    
    this.wss.on('connection', (ws, req) => {
      const userId = this.extractUserIdFromRequest(req);
      
      ws.userId = userId;
      this.registerUserSubscription(userId, ws);

      ws.on('message', (message) => this.handleIncomingMessage(ws, message));
      ws.on('close', () => this.handleWebSocketClose(ws));
    });
  }

  extractUserIdFromRequest(req) {
    // Extract user ID from authentication token or query parameters
    const token = req.headers['authorization']?.split(' ')[1];
    return this.decodeUserIdFromToken(token);
  }

  decodeUserIdFromToken(token) {
    // Implement JWT token decoding logic
    // This is a placeholder - replace with actual JWT verification
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded.userId;
    } catch (error) {
      return null;
    }
  }

  registerUserSubscription(userId, ws) {
    if (!this.alertSubscriptions.has(userId)) {
      this.alertSubscriptions.set(userId, new Set());
    }
    this.alertSubscriptions.get(userId).add(ws);
  }

  handleIncomingMessage(ws, message) {
    try {
      const parsedMessage = JSON.parse(message);
      
      switch(parsedMessage.type) {
        case 'SUBSCRIBE_REGULATORY_UPDATES':
          this.subscribeToRegulatoryUpdates(ws, parsedMessage.data);
          break;
        case 'UNSUBSCRIBE':
          this.unsubscribeFromChannel(ws, parsedMessage.data);
          break;
      }
    } catch (error) {
      console.error('Message parsing error:', error);
    }
  }

  async subscribeToRegulatoryUpdates(ws, subscriptionParams) {
    const { productCategory, targetMarket } = subscriptionParams;
    
    try {
      const updates = await this.fetchRegulationUpdates(productCategory, targetMarket);
      this.sendAlertToClient(ws, {
        type: 'REGULATORY_UPDATES',
        data: updates
      });
    } catch (error) {
      console.error('Regulatory update fetch error:', error);
    }
  }

  async fetchRegulationUpdates(productCategory, targetMarket) {
    try {
      const response = await axios.get('https://trade-regulations-api.gov/updates', {
        params: { productCategory, targetMarket },
        headers: {
          'Authorization': `Bearer ${process.env.TRADE_API_KEY}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Regulation update fetch failed:', error);
      return [];
    }
  }

  sendAlertToClient(ws, alertData) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(alertData));
    }
  }

  broadcastAlertToUser(userId, alertData) {
    const userSockets = this.alertSubscriptions.get(userId);
    
    if (userSockets) {
      userSockets.forEach(ws => {
        this.sendAlertToClient(ws, alertData);
      });
    }
  }

  unsubscribeFromChannel(ws, channelData) {
    // Remove specific subscription for the client
    const userId = ws.userId;
    const userSockets = this.alertSubscriptions.get(userId);
    
    if (userSockets) {
      userSockets.delete(ws);
      
      if (userSockets.size === 0) {
        this.alertSubscriptions.delete(userId);
      }
    }
  }

  handleWebSocketClose(ws) {
    const userId = ws.userId;
    const userSockets = this.alertSubscriptions.get(userId);
    
    if (userSockets) {
      userSockets.delete(ws);
      
      if (userSockets.size === 0) {
        this.alertSubscriptions.delete(userId);
      }
    }
  }

  async startPeriodicRegulatoryChecks() {
    setInterval(async () => {
      try {
        const activeSubscriptions = this.getActiveSubscriptions();
        
        for (const [userId, subscription] of activeSubscriptions) {
          const updates = await this.fetchRegulationUpdates(
            subscription.productCategory, 
            subscription.targetMarket
          );
          
          if (updates.length > 0) {
            this.broadcastAlertToUser(userId, {
              type: 'REGULATORY_UPDATES',
              data: updates
            });
          }
        }
      } catch (error) {
        console.error('Periodic regulatory check failed:', error);
      }
    }, 3600000); // Check every hour
  }

  getActiveSubscriptions() {
    // Implement logic to retrieve active subscriptions from database
    // This is a placeholder method
    return new Map();
  }
}

module.exports = new RealTimeAlertSystem();