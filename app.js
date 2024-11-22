// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

// Import custom routes
const complianceRoutes = require("./routes/complianceRoutes");
const incentivesRoutes = require("./routes/incentivesRoutes");
const documentationRoutes = require("./routes/documentRoutes");
const alertsRoutes = require("./utils/realTimeAlerts");

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan("dev")); // Log HTTP requests

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API Routes
app.use("/api/compliance", complianceRoutes); // Routes for compliance aggregator
app.use("/api/incentives", incentivesRoutes); // Routes for incentive finder
app.use("/api/documentation", documentationRoutes); // Routes for document generation
app.use("/api/alerts", alertsRoutes); // Routes for real-time alerts

// Base route
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to TradeEase AI API! Use specific routes for features.",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).send({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
