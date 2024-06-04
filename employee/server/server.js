const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const apiRoutes = require('./routes/empRoutes');
app.use('/api', apiRoutes); // Mount the routes to /api

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
