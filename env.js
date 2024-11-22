// backend/src/config/env.js
module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    API_KEYS: {
      DGFT: process.env.DGFT_API_KEY,
      TRADE_PORTAL: process.env.TRADE_PORTAL_API_KEY
    },
    ENVIRONMENT: process.env.NODE_ENV || 'development'
  };