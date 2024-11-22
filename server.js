// backend/src/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const env = require('./config/env');
const complianceRoutes = require('./routes/complianceRoutes');
const incentiveRoutes = require('./routes/incentiveRoutes');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/compliance', complianceRoutes);
app.use('/api/incentives', incentiveRoutes);
app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong', 
    error: process.env.NODE_ENV === 'development' ? err.message : {} 
  });
});

const PORT = env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;